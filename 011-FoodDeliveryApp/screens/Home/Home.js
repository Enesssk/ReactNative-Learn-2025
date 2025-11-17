import React from "react"
import { SafeAreaView, Text } from 'react-native';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView>
      {/*Search Component..*/}
      <Search placeholder={"Restaurants.."}/>
    </SafeAreaView>
  )
}

export default Home;