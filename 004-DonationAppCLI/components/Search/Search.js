import React, {useRef, useState} from "react"
import style from "./style"
import { Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';
import PropTypes from "prop-types"

const Search = props => {
  const textInputRef = useRef(null); //kullanıcı direkt dışardakinetıklayınca açılsın diye.
  const [search, setSearch] = useState(""); // değeri güncelleyerek almak için.

  const handleFocus = () => {
    textInputRef.current.focus() // focuslansın.
  }

  const handleSearch = searchValue => {
    setSearch(searchValue)
    props.onSearch(searchValue)
  }

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color={"#25C0FF"} size={scaleFontSize(22)}/>
      <TextInput
        style={style.textInput}
        ref = {textInputRef}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  )
}

Search.defaultProps = {
  onSearch: () => {}
}

Search.propTypes = {
  onSearch: PropTypes.func
}

export default Search