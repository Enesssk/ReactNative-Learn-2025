import React, {useState,} from "react"
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';

import style from "./style"
import globalStyle from '../../assets/styles/globalStyle';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const movieScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  let movieName = "Ant-Man and The MovieLion"

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      <ScrollView>
        {/*Image*/}
        <View style={style.imageContainer}>
          <ImageBackground
            imageStyle={{borderRadius: horizontalScale(24)}}
            source={require("../../assets/images/trendingimage.png")}
            style={style.image}/>
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.9)"]}
            style={style.gradient}/>
        </View>

        {/*backButton & heartButton*/}
        <View style={style.topContainer}>
          <TouchableOpacity
            style={style.backButtonBackground}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={scaleFontSize(28)} color={"white"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <FontAwesomeIcon icon={faHeart} size={scaleFontSize(28)}
                             color={isFavorite ? "#eadf0e" : "white"}/>
          </TouchableOpacity>
        </View>

        {/*MovieTextTitle*/}
        <View style={style.titleTextContainer}>
          <Text style={style.movieTitleText}>{movieName}</Text>
        </View>

        {/*MovieStatusTitle*/}
        <View style={style.statusTextContainer}>
          <Text style={style.statusText}>Released *</Text>
          <Text style={style.statusText}>2020 *</Text>
          <Text style={style.statusText}>170 min</Text>
        </View>

        {/*movieGenresTitle*/}
        <View style={style.statusTextContainer}>
          <Text style={style.statusText}>Action *</Text>
          <Text style={style.statusText}>Thrill *</Text>
          <Text style={style.statusText}>Comedy</Text>
        </View>

        {/*description*/}
        <View style={style.descContainer}>
          <Text style={style.descText}>AHSDHASDHSAHDSADHSHAASDBASJDBKAJSDBSALBASKDBASBDKASBKDASKBDAKBSDABKDASHDSHasjhdjasjsdaAHDHA</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default movieScreen