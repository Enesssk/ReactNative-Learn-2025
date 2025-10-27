import React,{ useState,} from "react"
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
import { useNavigation } from '@react-navigation/native';
import MovieList from '../../components/MovieList/MovieList';

const Person = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [personMovies, setPersonMovies] = useState([1,2,3,4]);

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      <ScrollView>
        {/*backButton & heartButton*/}
        <View style={style.topBarContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={style.backButtonBackground}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={scaleFontSize(28)} color={"white"}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faHeart} size={scaleFontSize(28)}
                             color={isFavorite ? "#eadf0e" : "white"}/>
          </TouchableOpacity>
        </View>

        {/*characterImage*/}
        <View style={style.imageContainer}>
          <Image
            source={require("../../assets/images/trendingimage.png")}
            style={style.image}/>
        </View>

        {/*characterName*/}
        <View style={style.characterNameContainer}>
          <Text style={style.characterName}>Keanu Reeves</Text>
        </View>

        {/*characterCountry*/}
        <View style={style.characterCountryContainer}>
          <Text style={style.characterCountry}>London, United Kingdom</Text>
        </View>

        {/*characterInfo*/}
        <View style={style.characterInfoContainer}>
          <View style={style.genderContainer}>
            <Text style={style.infoText}>Gender</Text>
            <Text style={style.infoDescText}>Male</Text>
          </View>
          <View style={style.genderContainer}>
            <Text style={style.infoText}>Birthday</Text>
            <Text style={style.infoDescText}>1964-09-02</Text>
          </View>
          <View style={style.genderContainer}>
            <Text style={style.infoText}>Known for</Text>
            <Text style={style.infoDescText}>Acting</Text>
          </View>
          <View style={style.noBorderGenderContainer}>
            <Text style={style.infoText}>Popularity</Text>
            <Text style={style.infoDescText}>64.23</Text>
          </View>
        </View>

        {/*Desc*/}
        <View style={style.descTitleTextContainer}>
          <Text style={style.descTitleText}>Biography</Text>
          <Text style={style.descText}>ALKNSDANSDNLSADklndsadnklasndkskşdfasndşasndşasnşldfasnlşdsanlşdnşlasnlşdasnldsanldnasdsnalşdanslşdsanldlnasdşnlmasnmldlasnşşldnaslnşd</Text>
        </View>

        {/*Desc*/}
        <MovieList title={"Movies"} hideSeeAll={true} data={personMovies}/>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Person;