import React from  "react"
import { Image, ScrollView, View } from 'react-native';
import style from "./style"

const ProfileTabContent = () => {
  return (
    <ScrollView style={style.profileTabContainer}>
      <View style={style.imageContainer}>
        <Image style={style.image} resizeMode={"contain"} source={require("../../assets/images/default_post.png")}/>
        <Image style={style.image} resizeMode={"contain"} source={require("../../assets/images/default_post.png")}/>
        <Image style={style.image} resizeMode={"contain"} source={require("../../assets/images/default_post.png")}/>
        <Image style={style.image} resizeMode={"contain"} source={require("../../assets/images/default_post.png")}/>
        <Image style={style.image} resizeMode={"contain"} source={require("../../assets/images/default_post.png")}/>
        <Image style={style.image} resizeMode={"contain"} source={require("../../assets/images/default_post.png")}/>
        <Image style={style.image} resizeMode={"contain"} source={require("../../assets/images/default_post.png")}/>
      </View>
    </ScrollView>
  )
}

export default ProfileTabContent