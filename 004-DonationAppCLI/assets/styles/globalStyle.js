import {StyleSheet} from 'react-native';
import { horizontalScale } from './scaling';

const globalStyle = StyleSheet.create({
  appBackground: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  singleDonationItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(16)
  }
});

export default globalStyle;