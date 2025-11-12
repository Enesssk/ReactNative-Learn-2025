import React, { useState, } from "react"
import {
  Image, Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import style from "./style"
import globalStyle from '../../assets/styles/globalStyle';
import Features from '../../components/Features/Features';
import { initialMessageList } from '../../constants';
import Assistants from '../../components/Assistants/Assistants';

const Home = () => {
  const [message, setMessage] = useState(initialMessageList);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const clearAssistant = () => {
    setMessage([])
  }

  const stopSpeaking = () => {
    setSpeaking(false)
  }

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyles.appBackground]}>
      {/*ImageTitle*/}
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require("../../assets/images/welcomeimage.png")}/>
      </View>

      {/*Features or Assistant*/}
      {
        message.length > 0 ? (
          <Assistants data={message}/>
        ) : (
          <Features title={"Features"}/>
        )
      }

      <View style={style.buttonContainer}>

        {/*Speaking*/}
        {
          speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              style={style.stopSpeaking}
            >
              <Text style={style.buttonText}>Stop</Text>
            </TouchableOpacity>
          )
        }

        {/*Microphone*/}
      {
        recording? (
          <View style={style.iconContainer}>
            <Image
              style={style.micIcon}
              source={{uri: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3N5M21sODJjeGVoYTV6N3IzNTRvbnUyNHBmbXF6N2xkM2hmbGR5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o1YuwnczQIcc3ZGlbq/giphy.gif"}}
            />
          </View>
        ): (
          //recording false
          <TouchableOpacity style={style.iconContainer}>
            <Image
              style={style.micIcon}
              source={require("../../assets/images/micicon.png")}
            />
          </TouchableOpacity>
        )
      }

        {/*Clear*/}
        {
          message.length > 0 && (
            <TouchableOpacity
              style={style.clearButton}
              onPress={clearAssistant}
            >
              <Text style={style.buttonText}>Clear</Text>
            </TouchableOpacity>
          )
        }

      </View>


    </SafeAreaView>
  )
}

export default Home;