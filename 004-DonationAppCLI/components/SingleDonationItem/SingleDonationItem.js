import React from "react"
import style from "./style"
import PropTypes from "prop-types"
import { Image, Pressable, Text, View } from 'react-native';
import Badge from '../../components/Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  return (
    <Pressable
    onPress={() => props.onPress(props.donationItemId)}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image style={style.image} source={{uri: props.uri}} resizeMode={"cover"} />
      </View>
      <Header title={props.donationTitle} type={3} color={"#0A043C"} />
      <View style={style.price}>
        <Header title={props.price} type={3} color={"#156CF7"} />
      </View>
    </Pressable>
  )
}

SingleDonationItem.defaultProps = {
  onPress: () => {}
}

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
}

export default SingleDonationItem