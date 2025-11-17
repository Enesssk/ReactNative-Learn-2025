import React from "react"
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faMapPin,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const FeaturedImageCard = props => {
  const navigation = useNavigation();
  const { image, name, star, reviews, category, address } = props.data;

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(Routes.Restaurant, {...props.data})}
    >
      <View
        style={style.topContainer}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={image}
          />
        </View>
        <View style={style.infoContainer}>
          <Text style={style.nameText}>{name}</Text>
          <View style={style.starContainer}>
            <FontAwesomeIcon icon={faStar} size={20} color={"#ddd412"}/>
            <Text>{star}({reviews}) - {category}</Text>
          </View>
          <View style={style.locationContainer}>
            <FontAwesomeIcon icon={faMapPin} size={20} color={"rgba(94,90,90,0.37)"}/>
            <Text>{address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

FeaturedImageCard.propTypes = {
  data: PropTypes.shape({ //bu obje olmalı.
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    reviews: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
}

export default FeaturedImageCard