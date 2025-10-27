import React from "react"
import { SafeAreaView, Text } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import SearchComponent from "../../components/Search/Search"

const Search = () => {
  const [movieResults, setMovieResults] = React.useState([1,2,3,4]);
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      <SearchComponent
        placeholder={"Search movie.."}
        data={movieResults}
        resultsLength={movieResults.length}
      />
    </SafeAreaView>
  )
}

export default Search;