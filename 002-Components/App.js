import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Image} from 'react-native'

const App = () => {
    const [textInput, setTextInput] = useState("")
     return (
          <SafeAreaView>
              <ScrollView
              contentContainerStyle={{height: 600, backgroundColor: "red"}}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal={true}
              onScroll={
                  console.log("Scroll is going..")
              }
              >
                  <Image source={require("./assets/images/appicon.png")} style={{width: 500, height: 500}}
                  >
                  </Image>
                  <Image source={require("./assets/images/appicon.png")} style={{width: 500, height: 500}}
                  >
                  </Image>
                  <Image source={require("./assets/images/appicon.png")} style={{width: 500, height: 500}}
                  >
                  </Image>
              </ScrollView>
              </SafeAreaView>
  )
}

export default App;