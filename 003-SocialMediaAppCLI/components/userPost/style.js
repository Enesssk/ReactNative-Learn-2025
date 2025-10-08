import {StyleSheet} from 'react-native'
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(24),
    marginHorizontal: horizontalScale(16)
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userComponent: {
    flexDirection: "row"
  },
  textComponent: {
    marginLeft: horizontalScale(8)
  },
  imageComponent: {
    alignItems: "center",
    marginTop: verticalScale(8)
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  symbolInfo: {
    flexDirection: "row",
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(8),
    padding: horizontalScale(3)
  },
  symbolText: {
    marginLeft: horizontalScale(3)
  }

})

export default style