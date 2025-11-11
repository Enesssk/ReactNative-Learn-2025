import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: verticalScale(32),
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: scaleFontSize(36),
    color: "black",
    fontWeight: "bold",
  },
  descText: {
    fontSize: scaleFontSize(20),
    color: "rgba(71,69,69,0.37)",
    fontWeight: scaleFontSize(600),
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(150),
  },
  button: {
    borderRadius: horizontalScale(20),
    backgroundColor: "#0fc0dc",
    width: "90%",
    height: verticalScale(50),
    marginTop: verticalScale(5),
    marginHorizontal: horizontalScale(16),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: scaleFontSize(18),
  }
})

export default style