import React from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';
import globalStyle from '../../assets/style/globalStyle';
import { horizontalScale, scaleFontSize } from '../../assets/style/scaling';
import Dishes from '../../components/Dishes/Dishes';

function ScrollV() {
  return null
}

const Restaurant = () => {
  const {params: item} = useRoute()
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[globalStyle.flex, globalStyle.appBackground]}
    >
    <View>
      <Image style={style.image} source={item.image} />

      {/*BackButton*/}
      <TouchableOpacity
        style={style.backButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
      </TouchableOpacity>

      {/*Other Info*/}
      <SafeAreaView style={globalStyle.flex}>
        <View style={style.backgroundContainer}>


          <Text style={style.titleText}>{item.name}</Text>
          <View style={style.infoContainer}>
            <FontAwesomeIcon icon={faStar} size={scaleFontSize(20)} color="black" />
            <Text style={style.infoText}>{item.stars}({item.reviews} review) - {item.category}</Text>
            <FontAwesomeIcon icon={faMapPin} size={scaleFontSize(20)} color={"black"}/>
            <Text>{item.address}</Text>
          </View>
          <Text style={style.menuTitle}>Menu</Text>
          {/*Dishes*/}
          {
            item.dishes.map((dishes, index) => {
              return (
                <Dishes
                  key={index}
                  data={dishes}
                />
                )
            })
          }
        </View>
    </SafeAreaView>
    </View>
    </ScrollView>
  );
}

export default Restaurant