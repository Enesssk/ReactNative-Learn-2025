import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native'

const App = () => {
    const [textInput, setTextInput] = useState("")
     return (
          <SafeAreaView>
              <TextInput
              style={{borderRadius: 4, borderWidth: 1, padding: 10, marginHorizontal: 8}}
              value={textInput}
              onChangeText={(textInput) => {
                  setTextInput(textInput)
              }}
              autoFocus={true}
              placeholder={"Please enter text"}
              keyboardType={"numeric"}
              >
              </TextInput>
              </SafeAreaView>
  )
}

export default App;