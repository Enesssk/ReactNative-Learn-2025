import { StyleSheet } from "react-native";
import {
  horizontalScale,
  movieScreenImageHeight,
  movieScreenTextHeight,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  backButtonBackground: {
    backgroundColor: "#eadf0e",
    borderRadius: horizontalScale(8)
  },
  topContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    left: horizontalScale(16),
    right: horizontalScale(16),
    marginTop: verticalScale(8),
  },
  imageContainer: {
    width: "100%",
    height: movieScreenImageHeight,
    borderRadius: horizontalScale(24),
    overflow: "hidden"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%", // sadece alt kısmı karartıyorum.
  },
  titleTextContainer: {
    justifyContent: "center",
    flex: 1,
    marginTop: -movieScreenTextHeight,
    marginHorizontal: horizontalScale(24),
  },
  movieTitleText: {
    fontSize: scaleFontSize(30),
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  statusTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(8)
  },
  statusText: {
    fontSize: scaleFontSize(17),
    fontWeight: "semibold",
    color: "rgb(243,232,232)",
    textAlign: "center",
    marginTop: verticalScale(8),
    marginLeft: horizontalScale(8)
  },
  descText: {
    fontSize: scaleFontSize(13),
    fontWeight: "normal",
    color: "rgb(243,232,232)",
    textAlign: "left",
  },
  descContainer: {
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(8),
  }
})

export default style