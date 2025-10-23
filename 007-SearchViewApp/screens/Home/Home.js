import React, { useEffect, useState } from 'react';
import style from "./style"
import globalStyle from "../../assets/globalStyle"
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import Search from '../../components/Search/Search';


const Home = () => {

  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <Search
      placeHolder={"Search.."}
      />
    </SafeAreaView>
    )
}

export default Home