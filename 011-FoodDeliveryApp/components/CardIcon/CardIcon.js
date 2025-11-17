import React from "react"
import { Text, TouchableOpacity, View } from 'react-native';
import style from "./style"
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const CardIcon = () => {
  const navigation = useNavigation();
  return (
    <View style={style.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Delivery)}
          style={style.backgroundContainer}
        >
          <View style={style.totalContainer}>
            <Text style={style.text}>3</Text>
          </View>
          <Text style={style.text}>View Card</Text>
          <Text style={style.text}>$23</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CardIcon