import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../assets/style/scaling';

const style = StyleSheet.create({
  topContainer: {
    position: "absolute",
    bottom: horizontalScale(-20),
    marginBottom: verticalScale(40),
    width: '100%',
    zIndex: 50
  },
  backgroundContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90&",
    height: verticalScale(50),
    marginHorizontal: horizontalScale(8),
    paddingHorizontal: horizontalScale(8),
    borderRadius: horizontalScale(15),
  },
  totalContainer: {
    width: horizontalScale(30),
    height: verticalScale(30),
    borderRadius: horizontalScale(15),
    backgroundColor: "rgba(94,90,90,0.37)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
  }
})

export default style