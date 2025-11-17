import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';

const style = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    marginHorizontal: horizontalScale(8),
    marginTop: verticalScale(8),
  },
  searchContainter: {
    width: "80%",
    height: verticalScale(35),
    marginHorizontal: horizontalScale(8),
    borderColor: "black",
    borderWidth: horizontalScale(1),
    borderRadius: horizontalScale(10),
    padding: horizontalScale(4),
    flexDirection: "row",
  },
  textInput : {
    marginHorizontal: horizontalScale(4),
    fontSize: scaleFontSize(14),
    color: "black",
    flex: 1, //textInput tüm boş alanı kapsıyor.
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderColor: "rgba(94,90,90,0.37)",
    borderLeftWidth: horizontalScale(1),
  },
  locationText: {
    fontSize: scaleFontSize(14),
    alignSelf: "center",
    marginHorizontal: horizontalScale(4),
  },
  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1515",
    width: horizontalScale(35),
    height: verticalScale(35),
    borderRadius: horizontalScale(17),
    marginHorizontal: horizontalScale(4),
  }
})

export default style