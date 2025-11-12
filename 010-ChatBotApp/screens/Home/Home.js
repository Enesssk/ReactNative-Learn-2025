import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
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
import Voice from '@react-native-voice/voice';
import useVoice from '../../hooks/useVoice';
import { chatgptCall } from '../../api/service/chatbotService';

const Home = () => {
  const {recording, result, messages, speaking, isLoading,
    start, stop, clearChat, stopSpeaking} = useVoice()


  const clearAssistant = () => {
    clearChat()
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
        messages.length > 0 ? (
          <Assistants data={messages}/>
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
          isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ): (
            <TouchableOpacity
              //if recording true, i am showing uri, if its false => png.
              onPress={recording ? stop : start }
              style={style.iconContainer}>
              <Image
                style={style.micIcon}
                source=
                  {
                    recording ?
                      {uri: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3N5M21sODJjeGVoYTV6N3IzNTRvbnUyNHBmbXF6N2xkM2hmbGR5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o1YuwnczQIcc3ZGlbq/giphy.gif"}
                      : require('../../assets/images/micicon.png')
                  }
              />
            </TouchableOpacity>
          )
        }

        {/*Clear*/}
        {
          messages.length > 0 && (
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