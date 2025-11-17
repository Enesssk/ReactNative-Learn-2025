import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(4),
  },
  inactiveCategoryBackground: {
    borderWidth: horizontalScale(1),
    borderColor: "black",
    borderRadius: horizontalScale(15),
    padding: horizontalScale(4),
  },
  activeCategoryBackground: {
    borderWidth: horizontalScale(1),
    borderColor: "black",
    backgroundColor: "black",
    borderRadius: horizontalScale(15),
    padding: horizontalScale(4),
  },
  categoryImage: {
    width: horizontalScale(45),
    height: horizontalScale(45),
    alignSelf: "center",
  },
  inactivecategoryName: {
    fontSize: scaleFontSize(14),
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  activecategoryName: {
    fontSize: scaleFontSize(14),
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
})

export default style