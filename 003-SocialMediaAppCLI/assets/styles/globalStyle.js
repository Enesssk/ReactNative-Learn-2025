import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from './scaling';


const globalStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginLeft: horizontalScale(20),
    marginTop: verticalScale(20),
    alignItems: "center",
    marginRight: horizontalScale(20),
    justifyContent: "space-between"
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    backgroundColor: "#F9FAFB"
  },
  messageNumberContainer: {
    backgroundColor: "#F35BAC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: horizontalScale(13),
    height: verticalScale(13),
    borderRadius: horizontalScale(13),
    position: "absolute",
    right: horizontalScale(5),
    top: verticalScale(5)
  },
  messageNumber: {
    color: "FFFFFF",
    fontSize: scaleFontSize(10),
    fontFamily: getFontFamily("Inter","600")
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20)

  }
})

export default globalStyle