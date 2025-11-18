import React, {useEffect} from "react"
import { Image, SafeAreaView, Text, View } from 'react-native';
import style from "./style"
import globalStyle from '../../assets/style/globalStyle';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const OrderPreparing = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      // move to finalScreen
      navigation.navigate(Routes.FinalScreen)
    },3000)
  }, []);


  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      <View style={style.topContainer}>
        <View style={style.imageContainer}>
          <Image
            source={{uri : "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW5pMWttdTIxazVhMHFnbXVhdWFrajIzbWpscHpycTBsOGV3a2UzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sobXK1zcTEv7TmHd21/giphy.gif"}}
            style={style.image}/>
        </View>
        <Text style={style.text}>Your order prepairing..</Text>
      </View>
    </SafeAreaView>
  )
}

export default OrderPreparing