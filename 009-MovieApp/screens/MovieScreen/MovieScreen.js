import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';

import style from "./style"
import globalStyle from '../../assets/styles/globalStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../../components/Cast/Cast';
import MovieList from '../../components/MovieList/MovieList';
import {
  getMovieCredits,
  getMovieDetailsWithId,
  getMovieSimilar,
} from '../../api/Service/movieService';
import { getImages342, getImages500 } from '../../api/Endpoint';
import Loading from '../../components/Loading/Loading';

const MovieScreen = () => {
  const {params: item} = useRoute()
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  let movieName = "Ant-Man and The MovieLion"
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetchMovieDetails(item.id)
    fetchMovieCredits(item.id)
    fetchMovieSimilar(item.id)
  }, [item]);

  const fetchMovieDetails = async id => {
    const data = await getMovieDetailsWithId(id)
    console.log("moviedata", data)
    if(data) setMovieDetails(data)
  }

  const fetchMovieCredits = async (id) => {
    const data = await getMovieCredits(id)
    console.log("cast", data)
    if(data && data.cast) setCast(data.cast)
    setLoading(false)
  }

  const fetchMovieSimilar = async (id) => {
    const data = await getMovieSimilar(id)
    console.log("similarData", data)
    if(data && data.results) setSimilar(data.results)
  }

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      {
        loading ? (
          <Loading/>
        ) : (
          <ScrollView>
            {/*Image*/}
            <View style={style.imageContainer}>
              <ImageBackground
                imageStyle={{borderRadius: horizontalScale(24)}}
                source={{uri: getImages500(movieDetails.poster_path)}}
                style={style.image}/>
              <LinearGradient
                colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.9)"]}
                style={style.gradient}/>
            </View>

            {/*backButton & heartButton*/}
            <View style={style.topContainer}>
              <TouchableOpacity
                style={style.backButtonBackground}
                onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} size={scaleFontSize(28)} color={"white"}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                <FontAwesomeIcon icon={faHeart} size={scaleFontSize(28)}
                                 color={isFavorite ? "#eadf0e" : "white"}/>
              </TouchableOpacity>
            </View>

            {/*MovieTextTitle*/}
            <View style={style.titleTextContainer}>
              <Text style={style.movieTitleText}>{
                movieDetails.title || movieDetails.name || "No Title"
              }
              </Text>
            </View>

            {/*MovieStatusTitle*/}
            <View style={style.statusTextContainer}>
              <Text style={style.statusText}>{movieDetails.status} •</Text>
              <Text style={style.statusText}>{movieDetails.release_date} •</Text>
              <Text style={style.statusText}>{movieDetails.runtime} min</Text>
            </View>

            {/*movieGenresTitle*/}
            <View style={style.statusTextContainer}>
              {
                movieDetails?.genres?.map((genresItem, index) => {
                  return (
                    <Text
                      key={index}
                      style={style.statusText}>{genresItem?.name}</Text>
                  )
                })
              }
            </View>

            {/*description*/}
            <View style={style.descContainer}>
              <Text style={style.descText}>{
                movieDetails.overview
              }</Text>
            </View>

            {/*cast*/}
            {cast.length > 0 && <Cast data={cast}/>}

            {/*similarMovies*/}
            {similar.length > 0 && <MovieList title={"Similar Movies"} data={similar} hideSeeAll={true}/>}
          </ScrollView>
        )
      }

    </SafeAreaView>
  )
}

export default MovieScreen