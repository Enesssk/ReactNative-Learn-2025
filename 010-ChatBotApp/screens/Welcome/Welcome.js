import React from "react"
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import style from "./style"
import { Routes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.appBackground]}>
      <View style={style.Container}>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>Jarvis</Text>
          <Text style={style.descText}>The Future is here, powered by AI!</Text>
        </View>
        <Image
          source={require("../../assets/images/welcomeimage.png")}
          style={style.image}
          />
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Home)}
          style={style.button}>
          <Text style={style.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Welcome;