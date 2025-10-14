import React from "react"
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/Header/Header';
import { updateFirstName } from '../../redux/reducers/User';



const Home = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={[globalStyle.appBackground, globalStyle.flex]}>
      <Header title={user.firstName}/>
      <Pressable onPress={() => dispatch(updateFirstName({firstName: "EKala"}))}>
        <Text>Press and change me!</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Home;