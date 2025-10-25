import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from './scaling';

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  appBackground: {
    backgroundColor: "#262626"
  },
  scrollViewStyle: {
    paddingBottom: verticalScale(10),
  }
})

export default globalStyles