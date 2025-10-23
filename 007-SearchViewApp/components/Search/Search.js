import React from "react"
import { View, Text, Pressable, TextInput } from "react-native"

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import style from "./style"
import { scaleFontSize } from '../../assets/scaling';


const Search = () => {

  return (
    <Pressable style={style.searchInputContainer}>
      <FontAwesomeIcon icon={faSearch} color={"#25C0FF"} size={scaleFontSize(22)}/>
      <TextInput style={style.textInput} />
    </Pressable>
  )
}

export default Search;