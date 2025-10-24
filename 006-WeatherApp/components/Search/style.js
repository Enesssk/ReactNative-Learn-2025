import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/scaling';

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
  locationContainer: {
    width: '90%',
    backgroundColor: "#FFFFFF",
    borderRadius: horizontalScale(14),
    alignItems: "center",
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(8),
  },
  locationText: {
    fontSize: scaleFontSize(18),
    fontWeight: "normal",
    color: "black",
    paddingVertical: verticalScale(4),
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'left',
    marginLeft: horizontalScale(8),
  },
  locationRow: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(16),
    alignItems: "center",
    marginVertical: verticalScale(4)
  }
})

export default style