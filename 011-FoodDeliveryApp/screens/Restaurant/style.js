import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/style/scaling';

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: horizontalScale(10),
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 20,
    borderRadius: 50,
    width: horizontalScale(35),
    height: verticalScale(35),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundContainer: {
    borderTopLeftRadius: horizontalScale(40),
    borderTopRightRadius: horizontalScale(40),
    marginTop: verticalScale(-48),
    backgroundColor: "white",
    flex: 1,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(16),
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(8),
    marginHorizontal: horizontalScale(16),
    alignItems: "center"
  },
  infoText: {
    fontSize: 16,
    marginHorizontal: horizontalScale(8),
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(16),
  }
})

export default style