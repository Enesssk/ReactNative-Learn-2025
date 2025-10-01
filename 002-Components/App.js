import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native'

const App = () => {
    const [imageSource, setImageSource] = useState({uri: "http://reactnative.dev/img/tiny_logo.png"})
     return (
          <SafeAreaView>
              <Image
                  source={imageSource}
                  style={{width: 100, height: 100, backgroundColor: "red"}}
                  resizeMode={"center"}
                  onError={ () => {
                  setImageSource(require("./assets/images/appicon.png"))
                  }}
              />
              </SafeAreaView>
  )
}

export default App;