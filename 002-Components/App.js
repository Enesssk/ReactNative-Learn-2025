import React from 'react';
import { SafeAreaView,Text } from 'react-native'
import styles from "./components/MyText/style";

const App = () => {
  return (
  <SafeAreaView>
    <Text style={styles.text} >Hello World!</Text>
  </SafeAreaView>
  );
}

export default App;