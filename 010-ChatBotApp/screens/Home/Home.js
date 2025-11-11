import React from "react"
import { SafeAreaView, Text } from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import style from "./style"
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyles.appBackground]}>
      <Text>Home Screen!</Text>
    </SafeAreaView>
  )
}

export default Home;