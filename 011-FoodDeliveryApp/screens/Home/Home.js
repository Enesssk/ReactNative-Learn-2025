import React from "react"
import { SafeAreaView, ScrollView, Text } from 'react-native';
import Search from '../../components/Search/Search';
import globalStyle from '../../assets/style/globalStyle';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <SafeAreaView>
      {/*Search Component..*/}
      <Search placeholder={"Restaurants.."}/>
      {/*Categories*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyle.scrollView}
      >
        {/*MainCategories*/}
        <Categories/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;