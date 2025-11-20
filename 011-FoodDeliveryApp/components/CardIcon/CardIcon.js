import React from "react"
import { Text, TouchableOpacity, View } from 'react-native';
import style from "./style"
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import { useSelector } from 'react-redux';
import { selectCardItems, selectCardTotal } from '../../redux/reducers/Card';

const CardIcon = () => {
  const navigation = useNavigation();
  const cardItems = useSelector(selectCardItems);
  const totalPrice = useSelector(selectCardTotal)

  if(!cardItems.length) return
  return (
    <View style={style.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Delivery)}
          style={style.backgroundContainer}
        >
          <View style={style.totalContainer}>
            <Text style={style.textTotal}>{cardItems.length}</Text>
          </View>
          <Text style={style.text}>View Card</Text>
          <Text style={style.text}>${totalPrice}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CardIcon