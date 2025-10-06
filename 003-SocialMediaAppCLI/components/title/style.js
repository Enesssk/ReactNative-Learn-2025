import { getFontFamily } from '../../assets/fonts/helper';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  title: {
    color: "#022150",
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: 24
  }
})

export default style