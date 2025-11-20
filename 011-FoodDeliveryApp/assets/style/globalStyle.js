import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  appBackground: {
    backgroundColor: "white",
  },
  scrollView: {
    paddingHorizontal: horizontalScale(8)
  },
  restaurantScrollView: {
    paddingBottom: verticalScale(16),
  }
})

export default globalStyle