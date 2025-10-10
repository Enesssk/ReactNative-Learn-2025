import React from "react"
import { View, Text, SafeAreaView } from "react-native";
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <View>
        <Text>Hello Home World!</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;