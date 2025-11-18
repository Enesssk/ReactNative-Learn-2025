import { StyleSheet } from 'react-native'
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';

const style = StyleSheet.create({
  mapViewContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: horizontalScale(40),
    borderTopLeftRadius: horizontalScale(40),
    width: '100%',
    height: verticalScale(200),
    bottom: 0,
    position: "absolute",
  },
  infoTextContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(24),
  },
  titleInfo: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: 'black',
  },
  descInfo: {
    fontSize: scaleFontSize(17),
    fontWeight: 'bold',
    color: 'black',
  },
  timeInfo: {
    fontSize: scaleFontSize(28),
    fontWeight: 'bold',
    color: 'black',
    marginVertical: verticalScale(10),
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(8),
  },
  image: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },
  buttonContainer: {
    width: "90%",
    height: verticalScale(60),
    borderRadius: horizontalScale(20),
    backgroundColor: "#eadf0e",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(10),
    flexDirection: "row",
  },
  profileImage: {
    width: horizontalScale(60),
    height: verticalScale(60),
  },
  profileTextContainer: {
    justifyContent: "center"
  },
  profileNameText: {
    fontSize: scaleFontSize(28),
    fontWeight: 'bold',
    color: 'white',
  },
  profileDescText: {
    fontSize: scaleFontSize(17),
    fontWeight: 'bold',
    color: 'black',
  },
  iconContainer: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: horizontalScale(20),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: horizontalScale(4),
  },
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
})

export default style