import React from "react"
import style from "./style"
import PropTypes from "prop-types"
import { Image, Text, View } from 'react-native';
import Badge from '../../components/Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image style={style.image} source={{uri: props.uri}} />
      </View>
      <Header title={props.donationTitle} type={3} color={"#0A043C"} />
      <View style={style.price}>
        <Header title={props.price} type={3} color={"#156CF7"} />
      </View>
    </View>
  )
}

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default SingleDonationItem