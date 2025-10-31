import { StyleSheet } from "react-native";
import {
  horizontalScale, movieScreenImageHeight,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(16),
    marginRight: horizontalScale(8),
  },
  titleText: {
    fontSize: scaleFontSize(20),
    color: "white",
    fontWeight: "semibold",
  },
  seeAllText: {
    fontSize: scaleFontSize(20),
    color: "#eadf0e",
    fontWeight: "semibold",
  },
  movieListContainer: {
    width: horizontalScale(120), // sabit genişlik
    marginLeft: horizontalScale(16),
    borderRadius: horizontalScale(24),
  },
  movieNameText: {
    fontSize: scaleFontSize(17),
    color: "white",
    fontWeight: "normal",
    marginTop: verticalScale(4),
    textAlign: "center",
  },
  movieImage: {
    width: "100%",
    height: 200,
    borderRadius: horizontalScale(24),
    resizeMode: "cover",
    marginTop: verticalScale(12),
  }
})

export default style