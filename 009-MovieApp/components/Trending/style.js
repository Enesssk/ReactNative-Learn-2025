import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  viewContainer: {
    marginTop: verticalScale(16),
  },
  viewBottomContainer: {
    paddingHorizontal: horizontalScale(16),
  },
  titleText: {
    fontSize: scaleFontSize(20),
    color: "white",
    fontWeight: "semibold",
  },
  trendingImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: horizontalScale(24)
  },
})

export default style