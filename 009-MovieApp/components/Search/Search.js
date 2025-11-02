import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { getSearchMovie } from '../../api/Service/movieService';
import { getImages185 } from '../../api/Endpoint';
import Loading from '../Loading/Loading';
import { debounce } from "lodash"

const Search = props => {
  const navigation = useNavigation();
  const textInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const data = Array.isArray(props.data) ? props.data : []
  const [loading, setLoading] = useState(false);

  const handleFocus = () => {
    textInputRef.current.focus();
  }

  const handleClick = (item) => {
    navigation.push(Routes.MovieScreen, item)
  }

  const handleSearch = searchValue => {
    setSearch(searchValue)
    if(searchValue.length > 2) {
      setLoading(true)
      getSearchMovie(searchValue).then(data => {
        setResults(data.results);
        setLoading(false)
        console.log(data)
      })
    }
  }

  const handleTextDebounce = useCallback(
    debounce((val) => handleSearch(val), 1200),
    []
  )

  useEffect(() => {
    return () => {
      handleTextDebounce.cancel(); // cleanup
    };
  }, [handleTextDebounce]);

  return (
      loading? (
        <Loading/>
      ) : (
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
              value={search}
              onChangeText={(val) => {
                setSearch(val)
                handleTextDebounce(val)}}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.Home)}>
              <FontAwesomeIcon icon={faClose} size={28} color={"#000000"}/>
            </TouchableOpacity>

          </Pressable>

          {/*Results*/}
          {
            results.length > 0 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyle.scrollViewStyle}
              >
                <View style={style.topContainer}>
                  <Text style={style.titleText}>Results ({results.length})</Text>
                </View>

                <View style={style.gridContainer}>
                  {
                    results.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => handleClick(item)}
                        >
                          <View style={style.imageContainer}>
                            <Image style={style.image}
                                   source={{uri: getImages185(item.poster_path)}}
                            />
                            <Text style={style.movieNameText}>
                              {
                                item.title.length > 8 ? item.title.slice(0, 8) + "..." : item.title
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

  )
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([
        PropTypes.shape({uri: PropTypes.string.isRequired}), //burası uri olacak. verileri çekince.
      ]).isRequired,
    })
  ).isRequired,
}

export default Search