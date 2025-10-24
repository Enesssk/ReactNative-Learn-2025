import React, {useState, useRef, useCallback } from "react"
import { View, Pressable, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/scaling';
import PropTypes from "prop-types"
import style from "./style"
import { text } from '@fortawesome/fontawesome-svg-core';
import { debounce } from "lodash"
import { fetchLocations, fetchWeatherForecast } from '../../api/weather';

const Search = props => {
  const textInputRef = useRef(null)
  const [search, setSearch] = useState('')
  const [locations, setLocations] = useState([]);

  const handleFocus = () => {
    textInputRef.current.focus()
  }

  const handleLocation = (loc) => {
    console.log("location:", loc)
    setLocations([]) // önceki locationları sıfırladım.
    setSearch([])
    fetchWeatherForecast({
      cityName: loc.name,
      days: "6"
    }).then(data => {
      console.log("got data:", data)
      props.onSearchComplete(data)
    })
  }

  const handleSearch = value => {
    setSearch(value)
    if( value.length > 2) {
      fetchLocations({cityName: value}).then(data => {
        setLocations(data)
      })
    }
  }
  const handleTextDebouce = useCallback(
    debounce((val) => handleSearch(val),1200),
    [])


  return (
    <View>
    <Pressable
      style={style.searchInputContainer}
      onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color={"#25C0FF"} size={scaleFontSize(22)}/>
      <TextInput
      style={style.textInput}
      placeholder={props.placeHolder}
      ref={textInputRef}
      value={search}
      onChangeText={(val) => {
        setSearch(val) // input hemen güncelleniyor.
        handleTextDebouce(val) //api çağrısı gecikecek.
      }}
      />
    </Pressable>
      {
        locations?.length > 0 && search? (
          <View style={style.locationContainer}>
            {
              locations.map((loc, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={style.locationRow}
                    onPress={() => handleLocation(loc)}
                  >
                    <FontAwesomeIcon icon={faLocation} size={scaleFontSize(14)} color={"black"}/>
                    <Text style={style.locationText}>{loc?.name}, {loc.country}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        ): null
      }
    </View>
  )
}

Search.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  onSearchComplete: PropTypes.func.isRequired
}

export default Search