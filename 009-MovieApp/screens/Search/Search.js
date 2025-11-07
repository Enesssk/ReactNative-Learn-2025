import React from "react"
import { SafeAreaView, Text } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import SearchComponent from "../../components/Search/Search"
import Loading from '../../components/Loading/Loading';

const Search = () => {
  const [movieResults, setMovieResults] = React.useState([1,2,3,4]);

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
          <SearchComponent
            placeholder={"Search movie.."}
            data={movieResults}
          />
    </SafeAreaView>
  )
}

export default Search;