import React, {useState, useRef} from "react"
import { View, Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/scaling';
import PropTypes from "prop-types"
import style from "./style"
import { text } from '@fortawesome/fontawesome-svg-core';

const Search = props => {
  const textInputRef = useRef(null)
  const [search, setSearch] = useState('')


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
        handleSearch(val)
      }
      />
    </Pressable>
    </View>
  )
}

Search.propTypes = {
  placeHolder: PropTypes.string.isRequired,
}

export default Search