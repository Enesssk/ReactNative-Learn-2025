import React from "react"
import { SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from "./components/title/Title"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import globalStyle from "./assets/styles/globalStyle"

const App = () => {

  return (
    <SafeAreaView>
        <View style={globalStyle.header}>
            <Title title={"Let's Explore"}/>
            <TouchableOpacity style={globalStyle.messageIcon}>
                <FontAwesomeIcon icon={faEnvelope} size={20} color={"#898DAE"}/>
                <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}


export default App;
