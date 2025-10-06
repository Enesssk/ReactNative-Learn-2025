import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';


const globalStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    alignItems: "center",
    marginRight: 20,
    justifyContent: "space-between"
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: "#F9FAFB"
  },
  messageNumberContainer: {
    backgroundColor: "#F35BAC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 13,
    height:13,
    borderRadius: 13,
    position: "absolute",
    right: 5,
    top: 5
  },
  messageNumber: {
    color: "FFFFFF",
    fontSize: 10,
    fontFamily: getFontFamily("Inter","600")
  }
})

export default globalStyle