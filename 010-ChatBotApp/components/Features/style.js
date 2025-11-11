import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  titleText: {
    fontSize: scaleFontSize(24),
    color: "rgba(14,14,14,0.37)",
    fontWeight: "bold",
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(16),
  },
  featuresContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: verticalScale(16),
  },
  chatgptContainer: {
    width: "90%",
    height: verticalScale(100),
    backgroundColor: "#0fc0dc",
    borderRadius: horizontalScale(20),
    marginHorizontal: horizontalScale(16),
    marginTop:verticalScale(16),
  },
  dallEContainer: {
    width: "90%",
    height: verticalScale(100),
    backgroundColor: "#cf87d5",
    borderRadius: horizontalScale(20),
    marginHorizontal: horizontalScale(16),
    marginTop:verticalScale(16),
  },
  smartAIContainer: {
    width: "90%",
    height: verticalScale(100),
    backgroundColor: "#72cc87",
    borderRadius: horizontalScale(20),
    marginHorizontal: horizontalScale(16),
    marginTop:verticalScale(16),
  },
  chatgptTitleContainer: {
    marginLeft: horizontalScale(8),
    marginTop: verticalScale(8),
    flexDirection: "row",
    alignItems: "center",
  },
  featuresIcon: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
  featuresTitle: {
    fontSize: scaleFontSize(16),
    color: "white",
    fontWeight: "bold",
    marginLeft: horizontalScale(8),
  },
  featuresDescText: {
    fontSize: scaleFontSize(15),
    fontWeight: scaleFontSize(700),
    color: "#2b2828",
    textAlign: "left",
    marginTop: verticalScale(4),
    marginHorizontal: horizontalScale(12),
  }
})

export default style