import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import style from "./style"
import { useNavigation, useRoute } from '@react-navigation/native';
import MovieList from '../../components/MovieList/MovieList';
import Loading from '../../components/Loading/Loading';
import {
  getPersonDetails,
  getPersonMoviesCredit,
  getPersonMoviesCreditEndpoint,
} from '../../api/Service/movieService';
import { getImages342 } from '../../api/Endpoint';

const Person = () => {
  const {params: item} = useRoute()
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [personMovies, setPersonMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [personDetails, setPersonDetails] = useState({});

  useEffect(() => {
    setLoading(true)
    fetchPersonDetails(item.id)
    fetchPersonPlaysMovies(item.id)
  }, [item]);

  const fetchPersonDetails = async (id) => {
    const data = await getPersonDetails(id)
    console.log("personData", data)
    if(data) setPersonDetails(data)
    setLoading(false)
  }

  const fetchPersonPlaysMovies = async (id) => {
    setLoading(false)
    const data = await getPersonMoviesCredit(id)
    console.log("personPlaysMovies", data)
    if(data && data.cast) setPersonMovies(data.cast)
  }

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      {
        loading ? (
          <Loading/>
        ) : (
          <ScrollView>
            {/*backButton & heartButton*/}
            <View style={style.topBarContainer}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={style.backButtonBackground}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size={scaleFontSize(28)}
                  color={'white'}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={scaleFontSize(28)}
                  color={isFavorite ? '#eadf0e' : 'white'}
                />
              </TouchableOpacity>
            </View>



            {/*characterImage*/}
            <View style={style.imageContainer}>
              <Image
                source={{ uri: getImages342(personDetails?.profile_path) }}
                style={style.image}
              />
            </View>

            {/*characterName*/}
            <View style={style.characterNameContainer}>
              <Text style={style.characterName}>{personDetails?.name}</Text>
            </View>

            {/*characterCountry*/}
            <View style={style.characterCountryContainer}>
              <Text style={style.characterCountry}>
                {personDetails?.place_of_birth}
              </Text>
            </View>

            {/*characterInfo*/}
            <View style={style.characterInfoContainer}>
              <View style={style.genderContainer}>
                <Text style={style.infoText}>Gender</Text>
                <Text style={style.infoDescText}>{
                  personDetails.gender == 2 ? "Male" : "Female"
                }</Text>
              </View>
              <View style={style.genderContainer}>
                <Text style={style.infoText}>Birthday</Text>
                <Text style={style.infoDescText}>{personDetails?.birthday}</Text>
              </View>
              <View style={style.genderContainer}>
                <Text style={style.infoText}>Known for</Text>
                <Text style={style.infoDescText}>{personDetails?.known_for_department}</Text>
              </View>
              <View style={style.noBorderGenderContainer}>
                <Text style={style.infoText}>Popularity</Text>
                <Text style={style.infoDescText}>{personDetails?.popularity}</Text>
              </View>
            </View>

            {/*Desc*/}
            <View style={style.descTitleTextContainer}>
              <Text style={style.descTitleText}>Biography</Text>
              <Text style={style.descText}>
                {personDetails?.biography}
              </Text>
            </View>

            {/*Desc*/}
            <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
          </ScrollView>
        )
      }

    </SafeAreaView>
  );
}

export default Person;