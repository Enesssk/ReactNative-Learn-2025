import React, {useState} from "react"
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import Input from "../../components/Input/Input"

import style from "./style"
import globalStyle from "../../assets/styles/globalStyle"
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={"Welcome Back"} />
        </View>
        <View style={globalStyle.marginBottom24}>
        <Input
          label={"Email"}
          placeHolder={"Enter your email..."}
          keyboardType={"email-address"}
          onChangeText={value => {
            setEmail(value)
          }}
        />
          </View>
        <View style={globalStyle.marginBottom24}>
        <Input
          label={"Password"}
          placeHolder={"Enter your password..."}
          onChangeText={value => {
            setPassword(value)
          }}
        />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={"Login"} />
        </View>
        <Pressable style={style.registrationButton}>
          <Header color={"#156CF7"} type={3} title={"Don't have an account?"}/>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login