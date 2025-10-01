import React, {useState} from 'react';
import {SafeAreaView, Text, Pressable, ScrollView, TextInput, TouchableOpacity, Switch, View} from 'react-native'

const App = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true)
     return (
          <SafeAreaView>
              <ScrollView>
                  <TextInput style={{borderWidth: 1, borderRadius: 4, padding: 10, marginTop: 10, marginHorizontal: 10}}
                             value={email}
                             onChangeText={value => {
                                 setEmail(value)}}
                             placeholder={"Please enter your email"}
                  />
                  <TextInput style={{borderWidth: 1, borderRadius: 4, padding: 10, marginTop: 10, marginHorizontal: 10}}
                             value={password}
                             onChangeText={password => {
                                 setPassword(password)
                             }}
                             placeholder={"Please enter your password"}
                  />
                  <View style={{flexDirection: "row", alignItems: "center", margin: 10}}>
                      <Switch value={shouldKeepLoggedIn} onValueChange={ value => setShouldKeepLoggedIn(value)}/>
                          <Text style={{marginLeft: 8}}>
                              Keep me logged In
                          </Text>
                  </View>
                  <TouchableOpacity style={[{backgroundColor: "black", marginTop: 10, marginHorizontal: 20},
                      (email.length === 0 || password.length<8) && {opacity: 0.5}]}

                  disabled={email.length === 0 || password.length<8}
                             onPress={() => {
                                 console.log(email, password)
                             }}>
                      <Text style={{color: "white", textAlign: "center", padding: 10}}>
                          Submit
                      </Text>
                  </TouchableOpacity>
              </ScrollView>
              </SafeAreaView>
  )
}

export default App;