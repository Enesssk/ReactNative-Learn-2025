import { StyleSheet } from 'react-native';
import { horizontalScale } from './scaling';

const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  appBackground: {
    backgroundColor: "white",
  },
  scrollView: {
    paddingHorizontal: horizontalScale(8)
  }
})

export default globalStyle