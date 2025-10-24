import React from "react"
import style from "./style"
import { SafeAreaView, Text, View, Image, StatusBar, ScrollView } from 'react-native';
import Search from '../../components/Search/Search';
import { horizontalScale, scaleFontSize } from '../../assets/scaling';
import globalStyle from "../../assets/globalstyle"

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundColor]}>
      <Search placeHolder={"Search.."}/>
      <View style={style.cityNameContainer}>
        <Text style={style.cityNameText}>London,</Text>
        <Text style={style.countryNameText}>United Kondom</Text>
      </View>
      <View style={style.todayImageContainer}>
        <Image
          style={style.todayImage}
          source={require("../../assets/images/partlycloudy.png")}
        />
      </View>
      <View style={style.todayDegreeContainer}>
        <Text style={style.degreeText}>23°</Text>
        <Text style={style.descText}>Partly Cloudy°</Text>
      </View>
      <View style={style.iconContainer}>
      <View style={style.iconTextContainer}>
        <Image
          style={style.icon}
          source={require("../../assets/images/wind.png")}/>
        <Text style={style.iconTextMargin}>22km</Text>
      </View>
      <View style={style.iconTextContainer}>
        <Image
          style={style.icon}
          source={require("../../assets/images/drop.png")}/>
        <Text style={style.iconTextMargin}>23%</Text>
      </View>
      <View style={style.iconTextContainer}>
        <Image
          style={style.icon}
          source={require("../../assets/images/sun.png")}/>
        <Text style={style.iconTextMargin}>6.05 A.M.</Text>
      </View>
      </View>
      <View style={style.dailyForecastContainer}>
        <Image
          style={style.icon}
          source={require("../../assets/images/wind.png")}/>
        <Text style={style.iconTextMargin}>Daily Forecast</Text>
      </View>
      <ScrollView
      horizontal={true}
      contentContainerStyle={{paddingHorizontal: horizontalScale(15)}}
      showsHorizontalScrollIndicator={false}>
        <View style={style.forecastContainer}>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={style.scrollImage}
          />
          <Text style={style.forecastDailyDegree}>Monday</Text>
          <Text style={style.forecastDailyDegree}>13</Text>
        </View>

        <View style={style.forecastContainer}>
          <Image
            source={require("../../assets/images/moderaterain.png")}
            style={style.scrollImage}
          />
          <Text style={style.forecastDailyDegree}>Tuesday</Text>
          <Text style={style.forecastDailyDegree}>16</Text>
        </View>

        <View style={style.forecastContainer}>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={style.scrollImage}
          />
          <Text style={style.forecastDailyDegree}>Wednesday</Text>
          <Text style={style.forecastDailyDegree}>20</Text>
        </View>

        <View style={style.forecastContainer}>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={style.scrollImage}
          />
          <Text style={style.forecastDailyDegree}>Thursday</Text>
          <Text style={style.forecastDailyDegree}>13</Text>
        </View>

        <View style={style.forecastContainer}>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={style.scrollImage}
          />
          <Text style={style.forecastDailyDegree}>Friday</Text>
          <Text style={style.forecastDailyDegree}>20</Text>
        </View>

        <View style={style.forecastContainer}>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={style.scrollImage}
          />
          <Text style={style.forecastDailyDegree}>Saturday</Text>
          <Text style={style.forecastDailyDegree}>18</Text>
        </View>

        <View style={style.forecastContainer}>
          <Image
            source={require("../../assets/images/moderaterain.png")}
            style={style.scrollImage}
          />
          <Text style={style.forecastDailyDegree}>Sunday</Text>
          <Text style={style.forecastDailyDegree}>30</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;