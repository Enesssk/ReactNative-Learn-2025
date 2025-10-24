import React, {useState, useRef} from "react"
import { View, Pressable, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/scaling';
import PropTypes from "prop-types"
import style from "./style"
import { text } from '@fortawesome/fontawesome-svg-core';

const Search = props => {
  const textInputRef = useRef(null)
  const [search, setSearch] = useState('')
  const [locations, setLocations] = useState([1,2,3]);


  const handleFocus = () => {
    textInputRef.current.focus()
  }

  const handleSearch = value => {
    setSearch(value)
  }

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
      onChangeText={(val) =>
        handleSearch(val)}
      />
    </Pressable>
      {
        locations.length > 0 && search? (
          <View style={style.locationContainer}>
            {
              locations.map((loc, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={style.locationRow}
                  >
                    <FontAwesomeIcon icon={faLocation} size={scaleFontSize(14)} color={"black"}/>
                    <Text style={style.locationText}>London, United Kingdom</Text>
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
}

export default Search