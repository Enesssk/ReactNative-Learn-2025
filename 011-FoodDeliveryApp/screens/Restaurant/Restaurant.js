import React from "react"
import { SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Restaurant = () => {
  const {params: item} = useRoute()
  return (
    <SafeAreaView>
      <Text>Restaurant..</Text>
    </SafeAreaView>
    )
}

export default Restaurant