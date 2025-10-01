import React, {useState} from 'react';
import {SafeAreaView, Text, Pressable,ScrollView, TextInput} from 'react-native'

const App = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     return (
          <SafeAreaView>
              <ScrollView>
                  <TextInput style={{borderWidth: 1, borderRadius: 4, padding: 10, marginTop: 10, marginHorizontal: 10}}
                             value={email}
                             onChangeText={value => {
                                 setEmail(value)}}
                             autoFocus={true}
                             placeholder={"Please enter your email"}
                  />
                  <TextInput style={{borderWidth: 1, borderRadius: 4, padding: 10, marginTop: 10, marginHorizontal: 10}}
                             value={password}
                             onChangeText={password => {
                                 setPassword(password)
                             }}
                             placeholder={"Please enter your password"}
                  />

                  <Pressable style={[{backgroundColor: "black", marginTop: 10, marginHorizontal: 20},
                      (email.length === 0 || password.length<8) && {opacity: 0.5}]}
                             
                  disabled={email.length === 0 || password.length<8}
                             onPress={() => {
                                 console.log(email, password)
                             }}>
                      <Text style={{color: "white", textAlign: "center", padding: 10}}>
                          Submit
                      </Text>
                  </Pressable>
              </ScrollView>
              </SafeAreaView>
  )
}

export default App;