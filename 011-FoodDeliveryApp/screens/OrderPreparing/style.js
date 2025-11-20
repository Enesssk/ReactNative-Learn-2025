import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize } from '../../assets/style/scaling';

const style = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginLeft: horizontalScale(-60)
  },
  image: {
    width: horizontalScale(250),
    height: horizontalScale(250),
  },
  text: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: "black",
    textAlign: "center",
  }
})

export default style