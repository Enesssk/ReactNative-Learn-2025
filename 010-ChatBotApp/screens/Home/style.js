import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  imageContainer: {
    marginTop: verticalScale(24),
    alignItems: "center"
  },
  image: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },
})

export default style