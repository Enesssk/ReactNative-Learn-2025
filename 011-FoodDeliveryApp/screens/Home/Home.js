import React from "react"
import { SafeAreaView, ScrollView, Text } from 'react-native';
import Search from '../../components/Search/Search';
import globalStyle from '../../assets/style/globalStyle';
import Categories from '../../components/Categories/Categories';
import { featured } from '../../constants';
import Featured from '../../components/Featured/Featured';

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
        {/*Featured*/}
        {
          [featured,featured].map((item, index) => {
            return (
              <Featured
                key={index}
                featuredTitle={item.title}
                featuredDesc={item.description}
                restaurants={item.restaurants}
              />
              )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;