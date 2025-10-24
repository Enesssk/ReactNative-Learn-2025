import React, {useState, useEffect} from "react"
import style from "./style"
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Search from '../../components/Search/Search';
import { horizontalScale, scaleFontSize } from '../../assets/scaling';
import globalStyle from "../../assets/globalstyle"
import { fetchWeatherForecast } from '../../api/weather';


const Home = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMyWeatherData()
  }, []);

  const fetchMyWeatherData = async () => {
    fetchWeatherForecast({
      cityName: "Ankara",
      days: 6,
    }).then(data => {
      setWeather(data)
      setLoading(false)
    })
  }

  return (
    <View style={[globalStyle.flex, globalStyle.backgroundColor]}>
      {loading ? (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <ActivityIndicator size="large" color="#e30f0f" />
        </View>
      ) : (
        <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundColor]}>
          <Search placeHolder={'Search..'} onSearchComplete={setWeather} onLoading={setLoading} />
          {weather && (
            <View>
              <View style={style.cityNameContainer}>
                <Text style={style.cityNameText}>
                  {weather.location?.name},
                </Text>
                <Text style={style.countryNameText}>
                  {weather.location?.country}
                </Text>
              </View>
              <View style={style.todayImageContainer}>
                <Image
                  style={style.todayImage}
                  source={{
                    uri: 'https:' + weather.current?.condition?.icon,
                  }}
                />
              </View>
              <View style={style.todayDegreeContainer}>
                <Text style={style.degreeText}>
                  {weather.current?.temp_c + '°'}
                </Text>
                <Text style={style.descText}>
                  {weather.current?.condition?.text}
                </Text>
              </View>
              <View style={style.iconContainer}>
                <View style={style.iconTextContainer}>
                  <Image
                    style={style.icon}
                    source={require('../../assets/images/wind.png')}
                  />
                  <Text style={style.iconTextMargin}>
                    {weather?.current?.wind_kph}
                  </Text>
                </View>
                <View style={style.iconTextContainer}>
                  <Image
                    style={style.icon}
                    source={require('../../assets/images/wind.png')}
                  />
                  <Text style={style.iconTextMargin}>
                    {'%' + weather?.current?.humidity}
                  </Text>
                </View>
                <View style={style.iconTextContainer}>
                  <Image
                    style={style.icon}
                    source={require('../../assets/images/wind.png')}
                  />
                  <Text style={style.iconTextMargin}>
                    {weather?.forecast?.forecastday?.[0]?.astro?.sunrise}
                  </Text>
                </View>
              </View>
              <View style={style.dailyForecastContainer}>
                <Image
                  style={style.icon}
                  source={require('../../assets/images/wind.png')}
                />
                <Text style={style.iconTextMargin}>Daily Forecast</Text>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{
                  paddingHorizontal: horizontalScale(15),
                }}
                showsHorizontalScrollIndicator={false}
              >
                <View style={style.forecastContainer}>
                  <Image
                    source={{
                      uri:
                        'https:' +
                        weather?.forecast?.forecastday?.[0]?.day?.condition
                          ?.icon,
                    }}
                    style={style.scrollImage}
                  />
                  <Text style={style.forecastDailyDegree}>Monday</Text>
                  <Text style={style.forecastDailyDegree}>
                    {weather?.forecast?.forecastday?.[0]?.day?.avgtemp_c}
                  </Text>
                </View>

                <View style={style.forecastContainer}>
                  <Image
                    source={{
                      uri:
                        'https:' +
                        weather?.forecast?.forecastday?.[1]?.day?.condition
                          ?.icon,
                    }}
                    style={style.scrollImage}
                  />
                  <Text style={style.forecastDailyDegree}>Tuesday</Text>
                  <Text style={style.forecastDailyDegree}>
                    {weather?.forecast?.forecastday?.[1]?.day?.avgtemp_c}
                  </Text>
                </View>

                <View style={style.forecastContainer}>
                  <Image
                    source={{
                      uri:
                        'https:' +
                        weather?.forecast?.forecastday?.[2]?.day?.condition
                          ?.icon,
                    }}
                    style={style.scrollImage}
                  />
                  <Text style={style.forecastDailyDegree}>Wednesday</Text>
                  <Text style={style.forecastDailyDegree}>
                    {weather?.forecast?.forecastday?.[2]?.day?.avgtemp_c}
                  </Text>
                </View>

                <View style={style.forecastContainer}>
                  <Image
                    source={{
                      uri:
                        'https:' +
                        weather?.forecast?.forecastday?.[1]?.day?.condition
                          ?.icon,
                    }}
                    style={style.scrollImage}
                  />
                  <Text style={style.forecastDailyDegree}>Thursday</Text>
                  <Text style={style.forecastDailyDegree}>
                    {weather?.forecast?.forecastday?.[1]?.day?.avgtemp_c}
                  </Text>
                </View>

                <View style={style.forecastContainer}>
                  <Image
                    source={{
                      uri:
                        'https:' +
                        weather?.forecast?.forecastday?.[0]?.day?.condition
                          ?.icon,
                    }}
                    style={style.scrollImage}
                  />
                  <Text style={style.forecastDailyDegree}>Friday</Text>
                  <Text style={style.forecastDailyDegree}>
                    {weather?.forecast?.forecastday?.[0]?.day?.avgtemp_c}
                  </Text>
                </View>

                <View style={style.forecastContainer}>
                  <Image
                    source={{
                      uri:
                        'https:' +
                        weather?.forecast?.forecastday?.[2]?.day?.condition
                          ?.icon,
                    }}
                    style={style.scrollImage}
                  />
                  <Text style={style.forecastDailyDegree}>Saturday</Text>
                  <Text style={style.forecastDailyDegree}>
                    {weather?.forecast?.forecastday?.[2]?.day?.avgtemp_c}
                  </Text>
                </View>

                <View style={style.forecastContainer}>
                  <Image
                    source={{
                      uri:
                        'https:' +
                        weather?.forecast?.forecastday?.[1]?.day?.condition
                          ?.icon,
                    }}
                    style={style.scrollImage}
                  />
                  <Text style={style.forecastDailyDegree}>Sunday</Text>
                  <Text style={style.forecastDailyDegree}>
                    {weather?.forecast?.forecastday?.[1]?.day?.avgtemp_c}
                  </Text>
                </View>
              </ScrollView>
            </View>
          )}
        </SafeAreaView>
      )}
    </View>
  );
}

export default Home;