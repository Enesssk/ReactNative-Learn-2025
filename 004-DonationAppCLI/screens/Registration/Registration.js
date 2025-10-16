import React, {useState} from "react"
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import Input from "../../components/Input/Input"

import style from "./style"
import globalStyle from "../../assets/styles/globalStyle"
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';


const Registration = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")

  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={navigation.goBack}/>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={"Hello and Welcome!"} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={"First & Last Name"}
            placeHolder={"Enter your full name..."}
            onChangeText={value => {
              setFullName(value)
            }}
          />
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
          <Button title={"Registration"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registration