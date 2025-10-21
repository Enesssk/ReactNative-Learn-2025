import {StyleSheet} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userName: {
    color: "#000000",
    textAlign: "center",
    top: verticalScale(10),
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: scaleFontSize(18)
  },
  image: {
    width: horizontalScale(100),
    height: verticalScale(100)
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent:"center",
    marginTop: verticalScale(30)
  },
  imageBorderContainer: {
    borderWidth: 1,
    borderColor: '#ec0124',
    padding: horizontalScale(3),
    borderRadius: horizontalScale(100),
  },
  likeContainer: {
    justifyContent:"flex-start",
    marginHorizontal: horizontalScale(32),
    marginTop: verticalScale(32)
  },
  likeTextContainer: {
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: scaleFontSize(14),
    color: "#191818",
    textAlign: "center"
  },
  likeTitleTextContainer: {
    fontFamily: getFontFamily("Inter", "600"),
    color: "#686666",
    textAlign: "center",
    fontSize: scaleFontSize(16)
  },
  likeUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
    paddingVertical: verticalScale(30),
  },
  statBorder: { //aradaki çizgi
    borderWidth: 1,
    borderColor: "#E9EFF1",
    marginTop: verticalScale(24)
  }
})

export default style;