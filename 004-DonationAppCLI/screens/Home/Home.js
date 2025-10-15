import React, {useState,useEffect} from "react"
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import style from "./style"
import Header from '../../components/Header/Header';
import { resetToInitialState } from '../../redux/reducers/User';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { uploadSelectedCategoryId } from '../../redux/reducers/Categories';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';
import { Routes } from '../../navigation/Routes';


const Home = ({navigation}) => {

  const user = useSelector(state => state.user)
  const categories = useSelector(state => state.categories)
  const donations = useSelector(state => state.donations)
  const dispatch = useDispatch()

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([])
  const [istLoadingCategories, setIsLoadingCategories] = useState(false)
  const categoryPageSize = 4

  const [donationItems, setDonationItems] = useState([])

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId)
    )
    setDonationItems(items)
  }, [categories.selectedCategoryId]) //selectedcategory her değiştiğinde.


  useEffect( () => {
    setIsLoadingCategories(true)
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize)
    )
    setCategoryPage(prev=> prev + 1)
    setIsLoadingCategories(false)
  }, [])

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize
    if(startIndex >= items.length) {
      return []
    }
    return items.slice(startIndex, endIndex)
  }

  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <ScrollView>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.username}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} type={1}/>
            </View>
          </View>
          <Image style={style.profileImage} source={{uri: user.image}}/>
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image style={style.highlightedImage}
                 resizeMode={"contain"}
                 source={require("../../assets/images/highlighted_image.png")}/>
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={"Select Category"} type={2}/>
        </View>
        <View style={style.categories}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if(istLoadingCategories) {
              return
          }
            setIsLoadingCategories(true)
            let newData = pagination(categories.categories, categoryPage, categoryPageSize)
            if(newData.length > 0) {
              setCategoryList(prevState => [...prevState, ...newData])
              setCategoryPage(prevState => prevState + 1)
          }
            setIsLoadingCategories(false)
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categoryList}
          renderItem={({item}) => (
          <View style={style.categoryItem} key={item.categoryId}>
            <Tab
              tabId={item.categoryId}
              onPress={value => dispatch(uploadSelectedCategoryId(value))}
              title={item.name}
              isInactive={item.categoryId !== categories.selectedCategoryId}
            />
          </View>
        )}
        />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => (
              <View style={style.singleDonationItem}>
              <SingleDonationItem
                onPress={selectedDonationId => {
                  dispatch(updateSelectedDonationId(selectedDonationId))
                  navigation.navigate(Routes.SingleDonationItem)
                }}
                uri={value.image}
                badgeTitle={
                categories.categories.filter(
                  val => val.categoryId == categories.selectedCategoryId
                )[0].name
                }
                donationItemId={value.donationItemId}
                key={value.donationItemId}
                donationTitle={value.name}
                price={parseFloat(value.price)}>
              </SingleDonationItem>
              </View>
              ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;