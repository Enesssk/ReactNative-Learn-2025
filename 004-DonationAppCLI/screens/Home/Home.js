import React from "react"
import { SafeAreaView } from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import Header from "../../components/Header/Header";
import Badge from "../../components/Badge/Badge";

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <Header title={"Azzahri A."} type={1}/>
      <Badge title={"Environment"}/>
    </SafeAreaView>
  )
}

export default Home;