import React from "react"
import {SafeAreaView, Text, View} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: "green", position: "relative", height: 200}}>

        <View
      style={{
        backgroundColor: "red",
        position: "relative",
        top: 10,
        right: 10,
        margin: 10
      }
      }>
      <Text>Hello World</Text>
        </View>

        <View
          style={{
            backgroundColor: "yellow",
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 20,
            zIndex: 1
          }
          }>
          <Text style={{
            textAlign: "center",
            color: "orange",
            fontFamily: "Arial",
            fontSize: 28,
            fontStyle: "italic"
          }}>Hello World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
