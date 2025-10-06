import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image} from 'react-native';
import style from "./style";

const userStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
      <Image style={style.image} source={props.image}/>
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  )
}

userStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired
}

export default userStory;