import React from "react"
import { Image, SafeAreaView, Text, View } from 'react-native';
import style from './style';

const Features = () => {
  return (
    <View>

      {/*Title*/}
      <Text style={style.titleText}>Features</Text>

      {/*Features*/}
      <View style={style.featuresContainer}>
        {/*ChatGptFeatures*/}
        <View style={style.chatgptContainer}>
          <View style={style.chatgptTitleContainer}>
            <Image
              style={style.featuresIcon}
              source={require("../../assets/images/welcomeimage.png")}/>
            <Text style={style.featuresTitle}>ChatGpt</Text>
          </View>
          <Text style={style.featuresDescText}>Chatgpt can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics </Text>
        </View>

      {/*DALL-E Features*/}
      <View style={style.dallEContainer}>
        <View style={style.chatgptTitleContainer}>
          <Image
            style={style.featuresIcon}
            source={require("../../assets/images/welcomeimage.png")}/>
          <Text style={style.featuresTitle}>DALL-E</Text>
        </View>
        <Text style={style.featuresDescText}>DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>
      </View>

      {/*Smart AI Features*/}
      <View style={style.smartAIContainer}>
        <View style={style.chatgptTitleContainer}>
          <Image
            style={style.featuresIcon}
            source={require("../../assets/images/welcomeimage.png")}/>
          <Text style={style.featuresTitle}>Smart AI</Text>
        </View>
        <Text style={style.featuresDescText}>A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing ypu the best of both worlds.</Text>
      </View>

    </View>
      </View>
  )
}

export default Features;