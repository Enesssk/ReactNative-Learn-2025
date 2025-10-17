import React, {useState} from "react"
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Input from "../../components/Input/Input"

import style from "./style"
import globalStyle from "../../assets/styles/globalStyle"
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';
import { loginUser } from '../../api/user';


const Login = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
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
          secureTextEntry={true}
          placeHolder={"Enter your password..."}
          onChangeText={value => {
            setPassword(value)
          }}
        />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            title={"Login"}
            onPress={async () => {
              const user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error)
              } else {
                setError('');
                setSuccess('Login is successfully');
                setTimeout(() => navigation.navigate(Routes.Home), 3000);
              }
            }}
          />
        </View>
        <Pressable style={style.registrationButton} onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color={"#156CF7"} type={3} title={"Don't have an account?"}/>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login