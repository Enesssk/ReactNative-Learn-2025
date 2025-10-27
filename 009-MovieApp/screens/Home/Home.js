import React,{useState} from 'react';
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

const Home = () => {
  const [trending, setTrending] = useState([1,2,3])
  const [upcoming, setUpcoming] = useState([1,2,3])
  const [topRated, setTopRated] = useState([1,2,3])
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

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
            <Trending trendingImages={trending}/>
            <MovieList data={upcoming} title={"Upcoming"}/>
            <MovieList data={topRated} title={"Top Rated"}/>
          </ScrollView>
        )
      }

    </SafeAreaView>
  )
}

export default Home