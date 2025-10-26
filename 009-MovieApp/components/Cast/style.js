import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  imageContainer: {
    marginTop: verticalScale(16),
  },
  image: {
    width: horizontalScale(80),
    height: horizontalScale(100),
    borderRadius: horizontalScale(20)
  },
  topContainer: {
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(24)
  },
  titleText: {
    fontSize: scaleFontSize(20),
    color: "white",
    fontWeight: "bold",
  },
  castContainer: {
    marginHorizontal: horizontalScale(4),
  },
  descText: {
    fontSize: scaleFontSize(17),
    color: "white",
    fontWeight: "normal",
    marginTop: verticalScale(4),
    textAlign: "center",
  }
})

export default style