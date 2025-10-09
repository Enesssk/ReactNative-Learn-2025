import {StyleSheet} from 'react-native'
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15)
  },
  titleIsNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400')
  }
})

export default style