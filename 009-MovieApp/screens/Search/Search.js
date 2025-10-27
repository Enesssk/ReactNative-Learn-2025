import React from "react"
import { SafeAreaView, Text } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import SearchComponent from "../../components/Search/Search"
import Loading from '../../components/Loading/Loading';

const Search = () => {
  const [movieResults, setMovieResults] = React.useState([1,2,3,4]);
  const [loading, setLoading] = React.useState(false);
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      {
        loading? (
          <Loading/>
        ): (
          <SearchComponent
            placeholder={"Search movie.."}
            data={movieResults}
            resultsLength={movieResults.length}
          />
        )
      }

    </SafeAreaView>
  )
}

export default Search;