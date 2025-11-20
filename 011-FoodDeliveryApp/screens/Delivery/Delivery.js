import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faMinus } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/style/scaling';
import style from "./style"
import globalStyle from '../../assets/style/globalStyle';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../../redux/reducers/Restaurant';
import { removeFromCard, selectCardItems, selectCardTotal } from '../../redux/reducers/Card';

const Delivery = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant)
  const cardItems = useSelector(selectCardItems)
  const cardTotalPrice = useSelector(selectCardTotal)
  const [groupItems, setGroupItems] = useState({})
  const deliveryFee = 2


  useEffect(() => {
    //with Lodash
    //const items = _.groupBy(cardItems, 'id');

    //with Reduce
    const items = cardItems.reduce((group, item) => {
      if(group[item.id]) { //item.id ye göre bir grup varsa.
        group[item.id].push(item) //push ile dizinin sonuna yeni elemanı ekledim.
      } else {
        group[item.id] = [item]
      }
      return group
    },{})
    setGroupItems(items)
  }, [cardItems]);

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.backButton}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={scaleFontSize(24)}
          color={'white'}
        />
      </TouchableOpacity>
      {/*RestaurantName*/}
      <View style={style.titleContainer}>
        <Text style={style.titleText}>Your Card</Text>
        <Text style={style.nameText}>{restaurant.name}</Text>
      </View>

      <View style={style.timeContainer}>
        <Image
          style={style.image}
          source={require('../../assets/images/icons8-cupcake-emoji-96.png')}
        />
        <Text style={style.timeText}>Deliver in 20-30 minutes</Text>
        <Text style={style.changeText}>Change</Text>
      </View>

      {/*İtems*/}
      <ScrollView
        contentContainerStyle={globalStyle.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(groupItems).map(([key, items]) => {
          //bu grubu diziye çevirdim.
          let item = items[0];
          return (
            <View key={key} style={style.itemContainer}>
              <View style={style.mainContainer}>
                <Text style={style.nameText}> {items.length}*</Text>
                <Image style={style.itemImage} source={item.image} />
                <Text style={style.foodNameText}>{item.name}</Text>
              </View>
              <View style={style.mainContainer}>
                <Text style={style.priceText}>${item.price}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeFromCard({id: item.id}))}
                  style={style.plusContainer}>
                  <FontAwesomeIcon icon={faMinus} size={scaleFontSize(24)} color={"white"}/>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/*Totals*/}
      <View style={style.totalPriceContainer}>
        <View style={style.subtotalContainer}>
          <Text style={style.subtotalText}>Subtotal</Text>
          <Text style={style.subtotalText}>${cardTotalPrice}</Text>
        </View>
        <View style={style.subtotalContainer}>
          <Text style={style.subtotalText}>Delivery Fee</Text>
          <Text style={style.subtotalText}>${deliveryFee}</Text>
        </View>
        <View style={style.subtotalContainer}>
          <Text style={style.orderTotalText}>Order Total</Text>
          <Text style={style.orderTotalText}>${cardTotalPrice + deliveryFee}</Text>
        </View>
        <TouchableOpacity
          style={style.orderButton}
          onPress={() => navigation.navigate(Routes.OrderPreparing)}
        >
          <Text style={style.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Delivery