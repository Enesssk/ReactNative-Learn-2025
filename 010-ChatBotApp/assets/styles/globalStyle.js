import { StyleSheet } from 'react-native';
import { verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  appBackground: {
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    paddingBottom: verticalScale(10),
  },
})

export default globalStyle