import React from "react"
import style from "./style"
import globalStyle from "../../assets/globalStyle"
import { SafeAreaView, Text } from 'react-native';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <Search />
    </SafeAreaView>
    )
}

export default Home