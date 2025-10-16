import React, {useState} from "react"
import { SafeAreaView, ScrollView } from 'react-native';
import Input from "../../components/Input/Input"

import style from "./style"
import globalStyle from "../../assets/styles/globalStyle"


const Login = () => {
  const [email, setEmail] = useState("")

  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      style={style.container}>
        <Input
          label={"Email"}
          placeHolder={"Enter your email..."}
          keyboardType={"email-address"}
          onChangeText={value => {
            setEmail(value)
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login