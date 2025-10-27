import React, {useRef, useState} from "react"
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"
import style from "./style"
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import globalStyle from '../../assets/styles/globalStyle';

const Search = props => {
  const navigation = useNavigation();
  const textInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([1,2,3,4]);
  let movieName = "Ant-Man and Wasperitazion 2"
  const data = Array.isArray(props.data) ? props.data : []

  const handleFocus = () => {
    textInputRef.current.focus();
  }

  const handleClick = (item) => {
    navigation.push(Routes.MovieScreen, item)
  }

  return (
    <View>
      {/*SearchComponent*/}
      <Pressable
        style={style.searchInputContainer}
        onPress={handleFocus}
      >
        <FontAwesomeIcon icon={faSearch} size={28} color={"#000000"}/>
        <TextInput
          style={style.textInput}
          placeholder={props.placeholder}
          ref={textInputRef}
          />
        <TouchableOpacity
        onPress={() => navigation.navigate(Routes.Home)}>
          <FontAwesomeIcon icon={faClose} size={28} color={"#000000"}/>
        </TouchableOpacity>

      </Pressable>

      {/*Results*/}
      {
        data.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={globalStyle.scrollViewStyle}
          >
            <View style={style.topContainer}>
              <Text style={style.titleText}>Results ({props.resultsLength})</Text>
            </View>

            <View style={style.gridContainer}>
            {
              data.map((item, index) => {
                return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleClick(item)}
                    >
                        <View style={style.imageContainer}>
                          <Image style={style.image}
                                 source={require("../../assets/images/trendingimage.png")}
                          />
                          <Text style={style.movieNameText}>
                            {
                              movieName.length > 14 ? movieName.slice(0,14) + "..." : movieName
                            }
                          </Text>
                        </View>
                    </TouchableOpacity>
                )
              })
            }
            </View>
          </ScrollView>
        ) : (
          <View>
            <Text style={style.noMatchedText}>Sorry, No matched..</Text>
          </View>
        )
      }


    </View>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  resultsLength: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Search