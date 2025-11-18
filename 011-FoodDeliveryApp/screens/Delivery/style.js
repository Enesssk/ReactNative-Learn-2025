import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  backButton: {
    width: horizontalScale(30),
    height: verticalScale(30),
    borderRadius: horizontalScale(10),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(16),
    marginLeft: horizontalScale(16),
  },
  titleText: {
    fontSize: scaleFontSize(24),
    fontWeight: 'bold',
    color: 'black',
  },
  titleContainer: {
    alignItems: 'center',
    top: horizontalScale(-28),
  },
  nameText: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: '#4a4747',
  },
  timeContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
  timeText: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: 'white',
  },
  changeText: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: '#eadf0e',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: verticalScale(60),
    borderRadius: horizontalScale(20),
    marginHorizontal: horizontalScale(16),
    paddingHorizontal: horizontalScale(16),
    marginVertical: verticalScale(8),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#0c788a',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  itemImage: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: horizontalScale(10),
  },
  foodNameText: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: horizontalScale(12),
  },
  priceText: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: horizontalScale(12),
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPriceContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: verticalScale(120),
    borderRadius: horizontalScale(10),
    position: 'absolute', //en alta sabitlik için.
    bottom: 0,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(4),
  },
  subtotalText: {
    fontSize: scaleFontSize(17),
    fontWeight: 'medium',
    color: 'white',
  },
  orderTotalText: {
    fontSize: scaleFontSize(17),
    fontWeight: 'bold',
    color: 'white',
  },
  orderButton: {
    width: '60%',
    height: verticalScale(30),
    borderRadius: horizontalScale(8),
    backgroundColor: '#eadf0e',
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: verticalScale(8),
  },
  buttonText: {
    fontSize: scaleFontSize(17),
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default style