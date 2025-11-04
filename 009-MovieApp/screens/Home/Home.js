import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scaleFontSize } from '../../assets/styles/scaling';

import globalStyle from "../../assets/styles/globalStyle"
import style from "./style"
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Trending from '../../components/Trending/Trending';
import MovieList from '../../components/MovieList/MovieList';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import Loading from '../../components/Loading/Loading';
import {
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '../../api/Service/movieService';

const Home = () => {
  const [trending, setTrending] = useState([0])
  const [upcoming, setUpcoming] = useState([0])
  const [topRated, setTopRated] = useState([0])
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchTrendingMovies()
    fetchUpcomingMovies()
    fetchTopRatedMovies()
  }, []);

  const fetchTrendingMovies = async () => {
    const data = await getTrendingMovies()
    if(data && data.results) setTrending(data.results)
    setLoading(false)
  }

  const fetchUpcomingMovies = async () => {
    const data = await getUpcomingMovies()
    if(data && data.results) setUpcoming(data.results)
  }

  const fetchTopRatedMovies = async () => {
    const data = await getTopRatedMovies()
    if(data && data.results) setTopRated(data.results)
  }

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>

      {/*TopBar*/}
      <View style={style.topBarContainer}>
        <FontAwesomeIcon icon={faBars} size={scaleFontSize(28)} color={"white"}/>
        <Text style={style.topTitleText}>
          <Text style={style.topTitleFirstWText}>M</Text>
          ovies
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Search)}>
          <FontAwesomeIcon icon={faSearch} size={scaleFontSize(28)} color={"white"}/>
        </TouchableOpacity>
      </View>

      {/*API*/}
      {
        loading ? (
          <Loading/>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyle.scrollViewStyle}
          >
            {trending.length > 0 && <Trending trendingImages={trending}/>}
            {upcoming.length > 0 && <MovieList data={upcoming} title={"Upcoming"}/>}
            {topRated.length > 0 && <MovieList data={topRated} title={"Top Rated"}/>}
          </ScrollView>
        )
      }

    </SafeAreaView>
  )
}

export default Home