import React from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from "prop-types"

import style from "./style"
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';

let movieName = "Ant-Man and The MovieLion"

const MovieList = props => {
  const navigation = useNavigation();
  const data = Array.isArray(props.data) ? props.data : [] //props.data arraysa göster değilse boş liste göster dedim. Güvenlik.

  const handleClick = (item) => {
    navigation.push(Routes.MovieScreen,item)
  }

  return (
    <View>
      <View style={style.topContainer}>
        <Text style={style.titleText}>{props.title}</Text>
        {props.hideSeeAll ? null : <Text style={style.seeAllText}>See All</Text>
        }
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={globalStyle.scrollViewStyle}>
        {
          data.map((item, index) => { //her item ve key için index.
            return (
              <TouchableOpacity
                key={index}
                //ONPRESS.
                onPress={() => handleClick(item)}
              >
                <View style={style.movieListContainer}>
                  <Image
                    source={require("../../assets/images/trendingimage.png")}
                    style={style.movieImage}
                  />
                  <Text style={style.movieNameText}>{
                    movieName.length >= 14 ? movieName.slice(0,14) + "..." : movieName
                  }</Text>
                </View>
              </TouchableOpacity>
            )
        })
        }
      </ScrollView>
    </View>
  )
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  hideSeeAll: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([
        PropTypes.number,
        //PropTypes.shape({uri: PropTypes.string.isRequired}),//burası uri olacak. verileri çekince.
    ]).isRequired,
  })
  ).isRequired,
}



export default MovieList