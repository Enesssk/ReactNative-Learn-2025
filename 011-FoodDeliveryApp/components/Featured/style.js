import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize } from '../../assets/style/scaling';

const style = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: horizontalScale(8),
  },
  titleText: {
    fontSize: scaleFontSize(20),
    fontWeight: "bold",
    color: "black",
  },
  descText: {
    fontSize: scaleFontSize(18),
    fontWeight: "normal",
    color: "rgba(35,35,35,0.37)",
  },
  seeAllText: {
    color: "#1c1515",
    fontSize: scaleFontSize(18),
    fontWeight: "semibold",
  }
})

export default style