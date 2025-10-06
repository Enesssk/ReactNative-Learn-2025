import React from "react"
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from "./components/title/Title"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import globalStyle from "./assets/styles/globalStyle"
import userStory   from "./components/userStory/userStory";
import UserStory from "./components/userStory/userStory";

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
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={userStories}
                      renderItem={({item}) => (
                <UserStory firstName={item.firstName} image={item.profileImage}
                />
                )}
            />
        </View>
    </SafeAreaView>
  );
}


export default App;
