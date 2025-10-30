import React from "react"
import PropTypes from "prop-types"
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from "./style"
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import { getImages342 } from '../../api/Endpoint';

const Cast = props => {
  const data = Array.isArray(props.data) ? props.data : [] //props.data arraysa göster değilse boş liste göster dedim. Güvenlik.
  const navigation = useNavigation();

  const handleClick = (person) => {
    navigation.navigate(Routes.Person, person)
  }

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
              onPress={() => handleClick(person)}
            >
              <View style={style.castContainer}>
                <View style={style.imageContainer}>
                  <Image source={{uri: getImages342(person.profile_path)}}
                         style={style.image}/>
                </View>
                <Text style={style.descText}>{
                  (person.title || person.name)
                    ? ((person.title || person.name).length >= 8
                      ? (person.title || person.name).slice(0, 8) + "..."
                      : (person.title || person.name))
                    : "No Title"}</Text>
                <Text style={style.descText}>{
                  (person.character)
                    ? ((person.character).length >= 8
                      ? (person.character).slice(0, 8) + "..."
                      : (person.character))
                    : "No Title"}</Text>
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