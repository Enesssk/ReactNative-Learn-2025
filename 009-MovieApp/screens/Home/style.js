import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(8),
  },
  topTitleText: {
    fontSize: scaleFontSize(28),
    fontWeight: "bold",
    color: "white",
  },
  topTitleFirstWText: {
    fontSize: scaleFontSize(28),
    fontWeight: "bold",
    color: "#eadf0e",
  }
})


export default style