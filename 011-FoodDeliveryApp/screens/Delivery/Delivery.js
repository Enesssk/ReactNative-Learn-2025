import React from "react"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/style/scaling';
import style from "./style"
import globalStyle from '../../assets/style/globalStyle';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../../constants';

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = featured.restaurants[0]
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={scaleFontSize(24)} color={"white"}/>
        </TouchableOpacity>
      {/*RestaurantName*/}
      <View style={style.titleContainer}>
          <Text style={style.titleText}>Your Card</Text>
          <Text style={style.nameText}>{restaurant.name}</Text>
        </View>

      <View style={style.timeContainer}>
        <Image
          style={style.image}
          source={require("../../assets/images/icons8-cupcake-emoji-96.png")}/>
        <Text style={style.timeText}>Deliver in 20-30 minutes</Text>
        <Text style={style.changeText}>Change</Text>
      </View>

      {/*İtems*/}
      <ScrollView
        contentContainerStyle={globalStyle.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {
          restaurant.dishes.map((item, index) => {
            return (
              <View
                key={index}
                style={style.itemContainer}>
                <View style={style.mainContainer}>
                  <Text style={style.nameText}>2 *</Text>
                  <Image
                    style={style.itemImage}
                    source={item.image}/>
                  <Text style={style.foodNameText}>{item.name}</Text>
                </View>
                <Text style={style.priceText}>${item.price}</Text>
              </View>
              )
          })
        }
      </ScrollView>
      {/*Totals*/}
      <View style={style.totalPriceContainer}>
        <View style={style.subtotalContainer}>
          <Text style={style.subtotalText}>Subtotal</Text>
          <Text style={style.subtotalText}>$20</Text>
        </View>
        <View style={style.subtotalContainer}>
          <Text style={style.subtotalText}>Delivery Fee</Text>
          <Text style={style.subtotalText}>$20</Text>
        </View>
        <View style={style.subtotalContainer}>
          <Text style={style.orderTotalText}>Order Total</Text>
          <Text style={style.orderTotalText}>$20</Text>
        </View>
        <TouchableOpacity
        style={style.orderButton}
        >
          <Text style={style.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Delivery