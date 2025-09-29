import React, {useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button} from 'react-native'

const App = () => {
    let array = Array(1000).fill(0)
    const scrollViewRef = useRef(null)

    const handleClick = () => {
        scrollViewRef.current.scrollTo({x: 0, y:0, animated: true})
    }

  return (
  <SafeAreaView>
      <ScrollView ref={scrollViewRef}>
          {array.map((value, index) => (
              <Text key={index}>Hello World!</Text>
          ))}
  </ScrollView>
      <Button onPress={handleClick} title={"Scroll to Top"}/>
</SafeAreaView>
  );
}

export default App;