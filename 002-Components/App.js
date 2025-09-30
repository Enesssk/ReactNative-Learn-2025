import React, {} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native'
import useToggle from "./customHooks/useToggle";

const App = () => {
    const [isOn, toggleIsOn] = useToggle(false)
  return (
          <SafeAreaView>
              <Text>{isOn ? "On" : "Off"}</Text>
              <Button title={"Toggle Text"} onPress={toggleIsOn}>
              </Button>
          </SafeAreaView>
  );
}

export default App;