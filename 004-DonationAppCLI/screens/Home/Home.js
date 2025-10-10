import React from "react"
import { SafeAreaView } from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <Header title={"Azzahri A."} type={1}/>
      <Button title={"Donate"} onPress={() => {
        console.log("You clicked me!!!")
      }}/>
      <Button title={"IsDisable"} isDisabled={true}/>
    </SafeAreaView>
  )
}

export default Home;