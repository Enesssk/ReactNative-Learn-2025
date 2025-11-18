import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import MapView, { Marker } from 'react-native-maps';
import { featured } from '../../constants';
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faClose,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/style/scaling';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const MapScreen = () => {
  const restaurants = featured.restaurants[0]
  const navigation = useNavigation();
  return (
    <View style={[globalStyle.flex, globalStyle.appBakground]}>
      {/*MapView*/}
        <MapView
          style={style.mapViewContainer}
          initialRegion={{
            latitude: restaurants.lat,
            longitude: restaurants.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          mapType={"standard"}
        >
          <Marker
            description={restaurants.description}
            title={restaurants.name}
            coordinate={{
              latitude: restaurants.lat,
              longitude: restaurants.lng,
          }}
            pinColor={"#eadf0e"}
          />
        </MapView>

      <View style={style.infoContainer}>
        <View style={style.topContainer}>
          <View style={style.infoTextContainer}>
            <Text style={style.titleInfo}>Estimated Arrival</Text>
            <Text style={style.timeInfo}>20-30 Minutes</Text>
            <Text style={style.descInfo}>Your order is own its way!</Text>
          </View>
          <Image style={style.image}
                 source={{uri: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWR2aXh5enJ1NHh4NWo1YWFnbnp5aXBzN2U1NTh6M3VyYmExbHZjYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IkYBDUqBUFvjv748H6/giphy.gif"}}/>
        </View>
        <View style={style.buttonContainer}>
          <View style={style.container}>
            <Image
              style={style.profileImage}
              source={{uri: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjlzYTdrb2pnZjNvNHJ5ZTJ0MDgycXA2NTEyZ3g4enl4N2J2NHQyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5JaU6ROdtQjMygZYqV/giphy.gif"}}
            />
            <View>
              <Text style={style.profileNameText}>Enes Kala</Text>
              <Text style={style.profileDescText}>Your Rider</Text>
            </View>
          </View>
          <View style={style.container}>
            <TouchableOpacity style={style.iconContainer}>
              <FontAwesomeIcon icon={faPhone} size={scaleFontSize(28)} color={"black"}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.Home)}
              style={style.iconContainer}>
              <FontAwesomeIcon icon={faClose} size={scaleFontSize(28)} color={"black"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>


  )
}

export default MapScreen;