import React from 'react';
import { SafeAreaView } from 'react-native'
import Item from "./components/Item/Item"

const App = () => {
  return (
  <SafeAreaView>
      <Item name={"chair"} price={20}></Item>
      <Item name={"table"} price={50}></Item>
      <Item name={"bed"} price={70}></Item>
  </SafeAreaView>
  );
}

export default App;