import React, {useState,useContext} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native'
import {ThemeContext} from "./context/ThemeContext";
import HomeScreen from "./components/HomeScreen/HomeScreen";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

  return (
      <ThemeContext.Provider value={isDarkMode}>
          <SafeAreaView>
              <View style={{backgroundColor: isDarkMode ? "#222222" : "#ffffff"}}>
      <Text>Hello World!!</Text>
              </View>
              <Button title={"Switch Mode"} onPress={toggleTheme}>
              </Button>
          </SafeAreaView>
</ThemeContext.Provider>
  );
}

export default App;