import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator, FlatList, Image,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"

import style from "./style"
import { scaleFontSize } from '../../assets/scaling';
import { text } from '@fortawesome/fontawesome-svg-core';
import filter from "lodash.filter"


const API_ENDPOINT = "https://randomuser.me/api/?results=30"

const Search = props => {
  const textInputRef = useRef(null) // kullanıcı direkt dışardakine tıklayınca textinput açılsın.
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetchData(API_ENDPOINT)
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json.results)

      setFullData(json.results)
      setIsLoading(false)
    } catch (err) {
      setError(err)
      setIsLoading(false)
    }
  }

  if(isLoading) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator size={"large"} color={"#5500dc"}/>
      </View>
    )
  }

  if(error) {
    return (
      <View style={style.loadingContainer}>
        <Text>Error in fetching data...</Text>
      </View>
    )
  }

  const handleFocus = () => {
    textInputRef.current.focus() //focuslansın.
  }

  const handleSearch = searchValue => {
    setSearch(searchValue)
    const formattedQuery = searchValue.toLowerCase() // küçük harfe çevirdikki bulunsun.
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery)
    })
    setData(filteredData) //filtrelenmiş datayı göster dedik.
  }

  const contains = ({name, email}, searchValue) => { //name ve email içinden searchvalue ara dedik.
    const {first, last} = name
    if(first.includes(searchValue) || last.includes(searchValue) | email.includes(searchValue)) {
      return true
    }
    return false
  }

  return (
    <View>
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color={"#25C0FF"} size={scaleFontSize(22)}/>
      <TextInput
        style={style.textInput}
        ref={textInputRef}
        placeholder={props.placeHolder}
        value={search}
        onChangeText={val => handleSearch(val)}
      />
      </Pressable>
      <FlatList
        data={data}
        keyExtractor={(item) => item.login.username}
        renderItem={({item}) => (
          <View style={style.listContainer}>
            <Image
              style={style.image}
              source={{uri: item.picture.thumbnail}} />
            <View style={style.textStyleContainer}>
              <Text style={style.nameTextStyle}>{item.name.first} {item.name.last}</Text>
              <Text style={style.emailTextStyle}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>

  )
}

Search.propTypes = {
  placeHolder: PropTypes.string.isRequired
}

export default Search;