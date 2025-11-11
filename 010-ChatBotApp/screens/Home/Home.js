import React from "react"
import { Image, SafeAreaView, Text, View } from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import style from "./style"
import globalStyle from '../../assets/styles/globalStyle';
import Features from '../../components/Features/Features';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyles.appBackground]}>
      {/*ImageTitle*/}
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require("../../assets/images/welcomeimage.png")}/>
      </View>

      {/*Features*/}
      <Features/>

    </SafeAreaView>
  )
}

export default Home;