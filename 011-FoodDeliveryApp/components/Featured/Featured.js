import React from "react"
import { ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import style from "./style"
import PropTypes from "prop-types"
import FeaturedImageCard from '../FeaturedImageCard/FeaturedImageCard';

const Featured = props => {
  const restaurantsData = Array.isArray(props.restaurants) ? props.restaurants : []
  return (
    <ScrollView
      contentContainerStyle={globalStyle.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <View style={style.topContainer}>
        <View style={style.textContainer}>
          <Text style={style.titleText}>{props.featuredTitle}</Text>
          <Text style={style.descText}>{props.featuredDesc}</Text>
        </View>
        <Text style={style.seeAllText}>See All</Text>
      </View>

      {/*FeaturedImage*/}
      <ScrollView
        contentContainerStyle={globalStyle.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          restaurantsData.map((restaurant, index) => {
            return (
              <FeaturedImageCard
                key={index}
                data={restaurant}/>
            )
          })
        }
      </ScrollView>

    </ScrollView>
    )
}

Featured.propTypes = {
  featuredTitle: PropTypes.string.isRequired,
  featuredDesc: PropTypes.string.isRequired,
  restaurants: PropTypes.array.isRequired,
}

export default Featured