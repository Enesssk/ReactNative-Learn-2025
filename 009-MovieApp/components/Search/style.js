import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  textInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(16)
  },
  topContainer: {
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(16),
  },
  titleText: {
    fontSize: scaleFontSize(20),
    color: "white",
    fontWeight: "bold",
  },
  imageContainer: {
    width: horizontalScale(160), // sabit genişlik
    marginTop: verticalScale(16),
    alignItems: "center", // yatayda ortalama
  },
  image: {
    width: "100%",
    height: verticalScale(190),
    borderRadius: horizontalScale(24),
    resizeMode: "cover",
    marginTop: verticalScale(12),
  },
  movieNameText: {
    fontSize: scaleFontSize(17),
    color: "white",
    fontWeight: "normal",
    marginTop: verticalScale(4),
    textAlign: "center",
  },
  noMatchedText: {
    fontSize: scaleFontSize(20),
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: verticalScale(24),
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }
})

export default style