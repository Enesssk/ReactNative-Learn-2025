import React from "react"
import PropTypes from "prop-types"
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from "./style"

const Cast = props => {
  let characterName = "John Wick"
  let personName = "Keanu Reeves"
  const data = Array.isArray(props.data) ? props.data : [] //props.data arraysa göster değilse boş liste göster dedim. Güvenlik.

  return (
    <View style={style.topContainer}>
      <Text style={style.titleText}>Top Cast</Text>
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={globalStyle.scrollViewStyle}>
      {
        data.map((person, index) => {
          return(
            <TouchableOpacity
              key={index}
            >
              <View style={style.castContainer}>
                <View style={style.imageContainer}>
                  <Image source={require("../../assets/images/trendingimage.png")}
                         style={style.image}/>
                </View>
                <Text style={style.descText}>{
                  characterName.length >= 10 ? characterName.slice(0,10) + "..." : characterName
                }</Text>
                <Text style={style.descText}>{
                  personName.length >= 10 ? personName.slice(0,10) + "..." : personName
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

Cast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      characterName: PropTypes.string.isRequired,
      personName: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([
        PropTypes.number,
      ]).isRequired,
    })
  ).isRequired,
}


export default Cast