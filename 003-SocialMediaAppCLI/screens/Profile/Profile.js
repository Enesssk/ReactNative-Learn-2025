import React from "react"
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back!</Text>
      </TouchableOpacity>
      <Text>Welcome the Profile page...</Text>
    </SafeAreaView>
  )
}

export default Profile