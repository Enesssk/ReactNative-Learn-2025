import React, { useRef } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import PropTypes from "prop-types"
import style from '../../screens/Home/style';
import globalStyle from '../../assets/styles/globalStyle';

const Assistants = props => {
  const data = Array.isArray(props.data) ? props.data : []
  const scrollViewRef = useRef(null)

  //for scrollview.
   const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({animated: true})
    },200)
  }

  return (
    <View>
      <Text style={style.titleText}>Assistant</Text>
      <View
        style={style.assistantBackgroundContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          //ref={scrollViewRef}
          contentContainerStyle={globalStyle.scrollViewStyle}>
          {
            data.map((item, index) => {
              if(item.role === "assistant") {
                if(item.type === "image") {
                  //its an ai image
                  return (
                    <View
                      key={index}
                      style={style.assistantImageContainer}
                    >
                      <Image
                        style={style.assistantImage}
                        source={{uri: item.content}}
                      />
                    </View>
                  )
                } else {
                  //its an a text
                  return (
                    <View
                      key={index}
                      style={style.assistantContainer}
                    >
                      <Text style={style.userText}>{item.content}</Text>
                    </View>
                  )
                }
              }else {
                //user input
                return (
                  <View
                    key={index}
                    style={style.userContainer}
                  >
                    <Text style={style.userText}>{item.content}</Text>
                  </View>
                )
              }
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

Assistants.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      role:PropTypes.string, //user or assistant
      content: PropTypes.string, //user content or assistant content,
    }).isRequired,
  ).isRequired,
}

export default Assistants;