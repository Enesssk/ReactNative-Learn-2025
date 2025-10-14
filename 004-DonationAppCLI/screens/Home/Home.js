import React from "react"
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import style from "./style"
import Header from '../../components/Header/Header';
import { resetToInitialState } from '../../redux/reducers/User';
import Search from '../../components/Search/Search';


const Home = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  dispatch(resetToInitialState())

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
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home;