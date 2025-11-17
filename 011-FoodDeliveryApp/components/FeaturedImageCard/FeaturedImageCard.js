import React from "react"
import { Image, ScrollView, Text, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faLocation,
  faMapPin,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const FeaturedImageCard = props => {
  return (
      <View style={style.topContainer}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={props.image}
          />
        </View>
        <View style={style.infoContainer}>
          <Text style={style.nameText}>{props.name}</Text>
          <View style={style.starContainer}>
            <FontAwesomeIcon icon={faStar} size={20} color={"#ddd412"}/>
            <Text>{props.star}({props.reviews}) - {props.category}</Text>
          </View>
          <View style={style.locationContainer}>
            <FontAwesomeIcon icon={faMapPin} size={20} color={"rgba(94,90,90,0.37)"}/>
            <Text>{props.address}</Text>
          </View>
        </View>
      </View>
  )
}

FeaturedImageCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  reviews: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}

export default FeaturedImageCard