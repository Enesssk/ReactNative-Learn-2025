import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from "./components/title/Title"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import globalStyle from "./assets/styles/globalStyle"
import UserStory from "./components/userStory/userStory";
import UserPost from "./components/userPost/userPost";

const App = () => {

    const userStories = [
        {
        firstName: "Joseph",
        id: 1,
        profileImage: require("./assets/images/default_profile.png"),
        },
        { firstName: "Joseph",
            id: 2,
            profileImage: require("./assets/images/default_profile.png")
        },
        { firstName: "Enes",
            id: 3,
            profileImage: require("./assets/images/default_profile.png")
            },
        { firstName: "Şeyma",
            id: 4,
            profileImage: require("./assets/images/default_profile.png")
        },
        { firstName: "Yusuf",
            id: 5,
            profileImage: require("./assets/images/default_profile.png")
        },
        { firstName: "Emre",
            id: 6,
            profileImage: require("./assets/images/default_profile.png")
        },
        { firstName: "Hatice",
            id: 7,
            profileImage: require("./assets/images/default_profile.png")
        },
        { firstName: "Hüseyin",
            id: 8,
            profileImage: require("./assets/images/default_profile.png")
        },
        { firstName: "Serap",
            id: 9,
            profileImage: require("./assets/images/default_profile.png")
        },
        ]
    const userPosts = [
        {
            firstName: "Enes",
            lastName: "Kala",
            location: "Denizli",
            likes: 100,
            comments: 20,
            bookmarks: 30,
            id:1,
            image: require("./assets/images/default_post.png"),
            profilePhoto: require("./assets/images/default_profile.png"),
        },
        {
            firstName: "Şeyma",
            lastName: "Kala",
            location: "Karcı",
            likes: 123,
            comments: 23123,
            bookmarks: 32,
            id:2,
            image: require("./assets/images/default_post.png"),
            profilePhoto: require("./assets/images/default_profile.png"),
        },
        {
            firstName: "Hüseyin",
            lastName: "Kala",
            location: "Denizli",
            likes: 342,
            comments: 65,
            bookmarks: 34,
            id:3,
            image: require("./assets/images/default_post.png"),
            profilePhoto: require("./assets/images/default_profile.png"),
        },
        {
            firstName: "Hatice",
            lastName: "Kala",
            location: "Çivril",
            likes: 12312,
            comments: 43,
            bookmarks: 123,
            id:4,
            image: require("./assets/images/default_post.png"),
            profilePhoto: require("./assets/images/default_profile.png"),
        },
        {
            firstName: "Emre",
            lastName: "Kala",
            location: "Iğdır",
            likes: 213,
            comments: 12,
            bookmarks: 32,
            id:5,
            image: require("./assets/images/default_post.png"),
            profilePhoto: require("./assets/images/default_profile.png"),
        },

    ]

    const userStoriesPageSize = 4 //her 4 itemda bir görüntüle..
    const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1)
    const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([])
    const [isLoadingUserStories, setIsLoadingUserStories] = useState(false)

    const userPostsPageSize = 4 //her 4 itemda bir görüntüle..
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1)
    const [userPostsRenderedData, setUserPostsRenderedData] = useState([])
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false)

    const pagination = (database, currentPage, pageSize) => {
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        if(startIndex >= database.length) {
            return []
        }
        return database.slice(startIndex, endIndex) //başlangıçtan sona paginationla..
    }


    useEffect(() => {
        setIsLoadingUserStories(true) //yüklensin sonra..
        const getInitialData = pagination(userStories, 1, userStoriesPageSize)
        setUserStoriesRenderedData(getInitialData)
        setIsLoadingUserStories(false)
    }, []);

    return (
    <SafeAreaView>
        <View style={globalStyle.header}>
            <Title title={"Let's Explore"}/>
            <TouchableOpacity style={globalStyle.messageIcon}>
                <FontAwesomeIcon icon={faEnvelope} size={20} color={"#898DAE"}/>
                <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={globalStyle.userStoryContainer}>
            <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if(isLoadingUserStories) {return}
                    setIsLoadingUserStories(true)
                    const contentToAppend = pagination(userStories, userStoriesCurrentPage+1, userStoriesPageSize)
                    if(contentToAppend.length > 0) { //data var demek..
                        setUserStoriesCurrentPage(userStoriesCurrentPage+1)
                        setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]) //öncesinden yenisine hepsini getir..
                }
                    setIsLoadingUserStories(false)
                }}

                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={userStoriesRenderedData}
                      renderItem={({item}) => (
                <UserStory key={"userStory" + item.id}
                           firstName={item.firstName}
                           profileImage={item.profileImage}
                />
                )}
            />
        </View>
        <FlatList data={userPosts} renderItem={({item}) => (
            <UserPost image={item.image}
                      key={item.id}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      location={item.location}
                      likes={item.likes}
                      comments={item.comments}
                      bookmarks={item.bookmarks}
                      profileImage={item.profilePhoto}
                      />
        )}>
        </FlatList>
    </SafeAreaView>
  );
}


export default App;
