import React from "react"
import { SafeAreaView } from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from '../../components/Tab/Tab';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <Header title={"Azzahri A."} type={1}/>
      <Tab title={"HighLight"}/>
      <Tab title={"HighLight"} isInactive={true}/>
    </SafeAreaView>
  )
}

export default Home;