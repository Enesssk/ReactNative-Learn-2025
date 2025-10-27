import React from "react"
import { ActivityIndicator, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Loading = () => {
  return (
    <View style={globalStyle.loading}>
      <ActivityIndicator
        size={"large"}
        color={"#eadf0e"}
        />
    </View>
  )
}

export default Loading;