import React from "react"
import { SafeAreaView, Text } from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import style from "./style"

const Welcome = () => {
  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.appBackground]}>
      <Text>Welcome Screen!</Text>
    </SafeAreaView>
  )
}

export default Welcome;