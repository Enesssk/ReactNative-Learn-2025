import React, { useState } from 'react';
import { categories } from '../../constants';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import style from "./style"

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={globalStyle.scrollView}
    >
      {
        categories.map((category, index) => {
          let isActive = category.id === activeCategory //seçilen ile normal id eşitse birbirine aktif.
          return (
            <View
              key={index}
              style={style.categoryContainer}
            >
              <TouchableOpacity
                style={isActive ? style.activeCategoryBackground : style.inactiveCategoryBackground}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  style={style.categoryImage}
                  source={category.image}/>
                <Text style={isActive ? style.activecategoryName : style.inactivecategoryName}>{category.name}</Text>
              </TouchableOpacity>
            </View>
            )
        })
      }
    </ScrollView>
  )
}


export default Categories