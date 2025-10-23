import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

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
  image: {
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: horizontalScale(25),
    resizeMode: "cover"
  },
  listContainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10)
  },
  textStyleContainer: {
    marginHorizontal: horizontalScale(8),
  },
  nameTextStyle: {
    fontSize: scaleFontSize(16),
    fontWeight: "bold",
    color: "black"
  },
  emailTextStyle: {
    fontSize: scaleFontSize(14),
    fontWeight: "medium",
    color: "gray"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default style