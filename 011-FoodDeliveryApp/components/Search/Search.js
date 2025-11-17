import React, { useRef } from 'react';
import { Pressable, TextInput, View, Text, } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSlidersH, faMapPin, faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/style/scaling';

const Search = props => {
  const textInputRef = useRef(null);

  const handleFocus = () => {
    textInputRef.current.focus();
  }

  return (
    <View style={style.topContainer}>
      <Pressable
        onPress={handleFocus}
        style={style.searchContainter}>
        <FontAwesomeIcon icon={faSearch} size={scaleFontSize(28)} color={"black"}/>
        <TextInput
          ref={textInputRef}
          style={style.textInput}
          placeholder={props.placeholder}/>
        {/*Location*/}
        <View style={style.locationContainer}>
          <FontAwesomeIcon icon={faMapPin} size={scaleFontSize(28)} color={"black"}/>
          <Text style={style.locationText}>New York, NYC</Text>
        </View>
      </Pressable>
        {/*Sliders*/}
      <View style={style.sliderContainer}>
        <FontAwesomeIcon icon={faSlidersH} size={scaleFontSize(28)} color={"white"}/>
      </View>

    </View>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default Search