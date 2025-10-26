import React from "react"
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import PropTypes from "prop-types"

import style from "./style"
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const Trending = props => {
  const navigation = useNavigation();
  const { width: screenWidth } = useWindowDimensions();

  const CARD_WIDTH  = Math.round(screenWidth * 0.68); // kart: ekranın %60–70'i.
  const CARD_HEIGHT = 300;
  const SIDE_PEEK = Math.round((screenWidth - CARD_WIDTH));

  const handleClick = (item) => {
    navigation.navigate(Routes.MovieScreen,item)
  }

  return (
    <View style={style.viewContainer}>
      <View style={style.viewBottomContainer}>
        <Text style={style.titleText}>Trending</Text>
      </View>
      <Carousel
        style={{alignSelf: "center", width: screenWidth,}}
        data={props.trendingImages}
        renderItem={({item}) => <MovieCard item={item} handleClick={handleClick} />}
        width={screenWidth} //kart genişliği
        height={CARD_HEIGHT}
        defaultIndex={1}
        loop={false}
        pagingEnabled={true}
        mode={"parallax"}
        modeConfig={{
          parallaxScrollingScale: 0.92,
          parallaxScrollingOffset: SIDE_PEEK,
        }}
      />
    </View>
  )
}

const MovieCard = ({item, handleClick}) => {
  const { width: screenWidth } = useWindowDimensions();
  const CARD_WIDTH  = Math.round(screenWidth * 0.68); // kart: ekranın %60–70'i
  const CARD_HEIGHT = 300;

  return (
    <TouchableWithoutFeedback
    onPress={() => handleClick(item)}
    >
      <View style={{width: screenWidth, alignItems: "center"}}>
        <View style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        }}>
          <Image
            style={style.trendingImage}
            source={require("../../assets/images/trendingimage.png")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

Trending.propTypes = {
  trendingImages: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Trending