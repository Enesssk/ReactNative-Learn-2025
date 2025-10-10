import React, {useState} from  "react"
import style from "./style"
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { horizontalScale } from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width)
  }
  return (
    <View
      style={[style.badge, badgeWidth]}
      onPress={() => props.onPress}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width)
        }}
        style={[style.title,]}>
        {props.title}
      </Text>
    </View>
  )
}

Badge.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Badge