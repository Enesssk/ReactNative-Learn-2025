import React, { useEffect, useState } from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/native';
import { getImages342 } from '../../api/Endpoint';
import { getMovieDetailsWithId } from '../../api/Service/movieService';

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
                    source={{uri: getImages342(item.poster_path)}}
                    style={style.movieImage}
                  />
                  <Text style={style.movieNameText}>{
                    (item.title || item.name)
                      ? ((item.title || item.name).length >= 8
                        ? (item.title || item.name).slice(0, 8) + "..."
                        : (item.title || item.name))
                      : "No Title"                  }</Text>
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
        PropTypes.shape({uri: PropTypes.string.isRequired}), //burası uri olacak. verileri çekince.
    ]).isRequired,
  })
  ).isRequired,
}



export default MovieList