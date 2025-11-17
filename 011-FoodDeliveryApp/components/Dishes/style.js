import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from '../../assets/style/scaling';

const style = StyleSheet.create({
  topContainer: {
    backgroundColor: "white",
    width: "90%",
    height: verticalScale(120),
    borderRadius: horizontalScale(20),
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(8),
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: "#0c788a",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
    justifyContent: "center"
  },
  imageContainer: {
    marginLeft: horizontalScale(8),
  },
  image: {
    width: horizontalScale(90),
    height: verticalScale(90),
    borderRadius: horizontalScale(16),
  },
  rowContainer: {
    flexDirection: "row",
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: horizontalScale(8),
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginVertical: horizontalScale(8),
  },
  descText: {
    fontSize: 18,
    fontWeight: "medium",
    color: "rgba(27,25,25,0.37)",
 },
  pieceContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "flex-end",
    alignItems: "center",
    marginEnd: horizontalScale(8),
  },
  plusContainer: {
    width: horizontalScale(24),
    height: verticalScale(24),
    borderRadius: horizontalScale(12),
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  pieceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: horizontalScale(8),
  }
})

export default style