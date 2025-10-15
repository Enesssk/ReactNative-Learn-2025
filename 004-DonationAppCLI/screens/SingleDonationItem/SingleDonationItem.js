import React from "react"
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from "../../assets/styles/globalStyle"
import style from "./style"

const SingleDonationItem = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation
  )
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SingleDonationItem