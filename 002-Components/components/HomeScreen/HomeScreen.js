import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import {View, Text} from "react-native"


const HomeScreen = () => {
    const isDarkMode = useContext(ThemeContext)
        return (
            <View style={{backgroundColor: isDarkMode ? "#222222" : "#FFFFFF"}}>
                <Text style={{color: isDarkMode ? "ffffff" : "000000"}}>
                    Welcome to React Native!
                </Text>
            </View>
    )
}

export default HomeScreen;