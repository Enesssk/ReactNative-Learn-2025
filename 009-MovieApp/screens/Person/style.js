import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  movieScreenTextHeight,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(8),
  },
  backButtonBackground: {
    backgroundColor: "#eadf0e",
    borderRadius: horizontalScale(8)
  },
  imageContainer: {
    alignItems: "center",
    marginTop: verticalScale(16),
    shadowColor: "rgba(241,236,236,0.37)",
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 40,
  },
  image: {
    width: horizontalScale(180),
    height: verticalScale(180),
    borderRadius: horizontalScale(160)
  },
  characterNameContainer: {
    justifyContent: "center",
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(16),
  },
  characterName:{
    fontSize: scaleFontSize(28),
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  characterCountryContainer: {
    justifyContent: "center",
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(4),
  },
  characterCountry: {
    fontSize: scaleFontSize(20),
    fontWeight: "semibold",
    color: "rgba(241,236,236,0.37)",
    textAlign: "center"
  },
  characterInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(241,236,236,0.37)",
    marginTop: verticalScale(16),
    width: "95%",
    height: verticalScale(40),
    borderRadius: horizontalScale(14),
  },
  genderContainer: {
    marginHorizontal: horizontalScale(8),
    borderRightWidth: 1,
    paddingEnd: horizontalScale(8),
    borderRightColor: "#f3e8e8",
  },
  noBorderGenderContainer: {
    marginLeft: horizontalScale(8),
    marginRight: horizontalScale(8),

  },
  infoText: {
    fontSize: scaleFontSize(14),
    fontWeight: "bold",
    color: "#f3e8e8",
    textAlign: "center"
  },
  infoDescText: {
    fontSize: scaleFontSize(14),
    fontWeight: "normal",
    color: "#f3e8e8",
    textAlign: "center"
  },
  descTitleTextContainer: {
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(16),
  },
  descTitleText: {
    fontSize: scaleFontSize(18),
    fontWeight: "bold",
    color: "#f3e8e8",
    textAlign: "left"
  },
  descText: {
    fontSize: scaleFontSize(16),
    fontWeight: "medium",
    color: "rgba(241,236,236,0.37)",
    textAlign: "left",
    marginTop: verticalScale(8),
    marginRight: horizontalScale(8)
  }
})

export default style