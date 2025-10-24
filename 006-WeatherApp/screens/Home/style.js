import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  cityNameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(30)
  },
  cityNameText: {
    fontSize: scaleFontSize(20),
    fontWeight: "bold",
    color: "black",
  },
  countryNameText: {
    fontSize: scaleFontSize(20),
    fontWeight: "normal",
    color: "gray",
  },
  todayImageContainer: {
    marginTop: verticalScale(25),
    alignItems: "center"
  },
  todayImage: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: "contain"
  },
  degreeText: {
    fontSize: scaleFontSize(30),
    fontWeight: "800",
    color: "black",
    textAlign: "center",
  },
  descText: {
    fontSize: scaleFontSize(25),
    fontWeight: "500",
    color: "gray",
    textAlign: "center",
    marginTop: verticalScale(8),
  },
  todayDegreeContainer: {
    marginTop: verticalScale(25),
  },
  icon: {
    height: verticalScale(30),
    width: horizontalScale(30),
    resizeMode: "contain"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  iconTextContainer: {
    flexDirection: "row",
    marginLeft: horizontalScale(8),
  },
  iconTextMargin: {
    marginLeft: verticalScale(8),
    marginVertical: verticalScale(8)
  },
  dailyForecastContainer: {
    flexDirection: "row",
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(24)
  },
  scrollImage: {
    height: verticalScale(30),
    width: horizontalScale(30),
    resizeMode: "contain"
  },
  forecastContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(4),
    alignItems: "center",
    backgroundColor: "rgba(37,36,36,0.3)",
    width: horizontalScale(70),
    height: verticalScale(70),
    borderRadius: verticalScale(20)
  },
  forecastDailyDegree: {
    marginTop: verticalScale(4),
    textAlign: "center"
  }
})

export default style