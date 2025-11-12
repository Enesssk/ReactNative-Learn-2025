import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  imageContainer: {
    marginTop: verticalScale(24),
    alignItems: "center"
  },
  image: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },
  titleText: {
    fontSize: scaleFontSize(24),
    color: "rgba(14,14,14,0.37)",
    fontWeight: "bold",
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(16),
  },
  assistantBackgroundContainer: {
    width: "90%",
    height: verticalScale(350),
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(20),
    backgroundColor: "rgba(214,214,214,0.68)",
    alignSelf: "center",
    borderRadius: horizontalScale(20),
  },
  userContainer: {
    backgroundColor: "white",
    width: "60%",
    borderRadius: horizontalScale(10),
    marginVertical: verticalScale(10),
    alignSelf: "flex-end",
    justifyContent: "center",
    marginEnd: horizontalScale(8),
    padding: horizontalScale(4)
  },
  userText: {
    fontSize: scaleFontSize(16),
    fontWeight: "medium",
    color: "black",
    textAlign: "left",
    marginHorizontal: horizontalScale(4),
    flexWrap: "wrap"
  },
  assistantContainer: {
    backgroundColor: "#17f1f1",
    width: "60%",
    borderRadius: horizontalScale(10),
    marginVertical: verticalScale(10),
    alignSelf: "flex-start",
    justifyContent: "center",
    marginStart: horizontalScale(8),
    padding: horizontalScale(4)
  },
  assistantImageContainer: {
    width: horizontalScale(130),
    height: verticalScale(130),
    borderRadius: horizontalScale(10),
    marginVertical: verticalScale(10),
    alignSelf: "flex-start",
    justifyContent: "center",
    marginStart: horizontalScale(8),
  },
  assistantImage: {
    width: horizontalScale(130),
    height: verticalScale(130),
    resizeMode: "contain",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(4),
  },
  micIcon: {
    width: horizontalScale(50),
    height: verticalScale(50),
    resizeMode: "contain",
    borderRadius: horizontalScale(25),
  },
  clearButton: {
    borderRadius: horizontalScale(10),
    backgroundColor: "rgba(94,90,90,0.37)",
    width: horizontalScale(40),
    height: verticalScale(30),
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "medium",
    fontSize: scaleFontSize(15),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  stopSpeaking: {
    borderRadius: horizontalScale(10),
    backgroundColor: "#e30f0f",
    width: horizontalScale(40),
    height: verticalScale(30),
    alignItems: "center",
    justifyContent: "center"
  }
})

export default style