import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native'
import MyText from "./components/MyText/MyText"

const App = () => {
    const [text, setText] = useState("Hello World!")
  return (
  <SafeAreaView>
      <Text
          onPress = {() => setText("Hello Enes World!")}>
          {text}
      </Text>
  </SafeAreaView>
  );
}

export default App;