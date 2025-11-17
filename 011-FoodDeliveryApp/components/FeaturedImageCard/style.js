import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/style/scaling';

const style = StyleSheet.create({
  topContainer: {
    width: horizontalScale(230),
    height: verticalScale(205),
    backgroundColor: "white",
    borderRadius: horizontalScale(20),
    marginVertical: verticalScale(8),
    marginHorizontal: horizontalScale(8),
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: "#1c1515",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  imageContainer: {
    borderRadius: horizontalScale(14),
  },
  image: {
    width: horizontalScale(230),
    height: verticalScale(120),
    borderRadius: horizontalScale(20),
  },
  infoContainer: {
    marginVertical: verticalScale(8),
    alignSelf: "flex-start",
    marginHorizontal: horizontalScale(8),
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    textAlign: "left",
    marginVertical: verticalScale(2),
  },
  starContainer: {
    flexDirection: "row",
    marginTop: verticalScale(8),
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: verticalScale(8),
  }
})

export default style