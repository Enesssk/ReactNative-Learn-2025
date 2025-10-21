import React from "react"
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.imageContainer}>
          <View style={style.imageBorderContainer}>
            <Image style={style.image} source={require("../../assets/images/default_profile.png")}/>
          </View>
        </View>
        <Text style={style.userName}>Emmanuel Federico</Text>
        <View style={style.likeUpContainer}>
        <View style={style.likeContainer}>
          <Text style={style.likeTextContainer}>30</Text>
          <Text style={style.likeTitleTextContainer}>Likes</Text>
        </View>
          <View style={style.statBorder}></View>
        <View style={style.likeContainer}>
          <Text style={style.likeTextContainer}>40</Text>
          <Text style={style.likeTitleTextContainer}>Comment</Text>
        </View>
          <View style={style.statBorder}></View>
          <View style={style.likeContainer}>
          <Text style={style.likeTextContainer}>50</Text>
          <Text style={style.likeTitleTextContainer}>Share</Text>
        </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile