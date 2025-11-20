import React from "react"
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/style/scaling';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCard,
  removeFromCard,
  selectCardItems,
  selectCardItemsById,
} from '../../redux/reducers/Card';

const Dishes = props => {
  const { image, name, description, price} = props.data
  const dispatch = useDispatch()
  const selectedItemValue = useSelector(state => selectCardItemsById(state, props.data.id))

  const handleIncrease = () => {
    dispatch(addToCard({...props.data}))
  }
  const handleDecrease = () => {
    dispatch(removeFromCard({...props.data}))
  }

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
          <TouchableOpacity
            onPress={handleDecrease}
            disabled={!selectedItemValue}
            style={style.plusContainer}>
            <FontAwesomeIcon icon={faMinus} size={scaleFontSize(24)} color={"white"}/>
          </TouchableOpacity>
          <Text style={style.pieceText}>{selectedItemValue.length}</Text>
          <TouchableOpacity
            onPress={handleIncrease}
            style={style.plusContainer}>
            <FontAwesomeIcon icon={faPlus} size={scaleFontSize(24)} color={"white"}/>
          </TouchableOpacity>
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