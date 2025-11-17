import React from "react"
import { Image, Text, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/style/scaling';

const Dishes = props => {
  const { image, name, description, price} = props.data
  return (
    <View style={style.topContainer}>
      <View style={style.rowContainer}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={image}/>
        </View>
        <View style={style.textContainer}>
          <Text style={style.nameText}>{name}</Text>
          <Text style={style.descText}>{description}</Text>
          <Text style={style.nameText}>${price}</Text>
        </View>
        <View style={style.pieceContainer}>
          <View style={style.plusContainer}>
            <FontAwesomeIcon icon={faMinus} size={scaleFontSize(24)} color={"white"}/>
          </View>
          <Text style={style.pieceText}>2</Text>
          <View style={style.plusContainer}>
            <FontAwesomeIcon icon={faPlus} size={scaleFontSize(24)} color={"white"}/>
          </View>
        </View>
      </View>
    </View>
  )
}

Dishes.propTypes = {
   data: PropTypes.shape({
     image: PropTypes.number.isRequired,
     name: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
   }) .isRequired,
}

export default Dishes