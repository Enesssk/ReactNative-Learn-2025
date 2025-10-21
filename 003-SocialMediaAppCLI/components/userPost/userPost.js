import React from "react"
import PropTypes from "prop-types"
import { Text, View, Image} from "react-native";
import UserProfileImage from '../userProfileImage/userProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.header}>
      <View style={style.user}>
        <View style={style.userComponent}>
          <UserProfileImage profileImage={props.profileImage} imageDimensions={48}/>
          <View style={style.textComponent}>
            <Text>{props.firstName} {props.lastName}</Text>
            {props.location && (
              <Text>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH}/>
      </View>
      <View style={style.imageComponent}>
        <Image source={props.image}/>
      </View>
      <View style={style.userInfo}>
        <View style={style.symbolInfo}>
          <FontAwesomeIcon icon={faHeart}/>
          <Text style={style.symbolText}>{props.likes}</Text>
        </View>
        <View style={style.symbolInfo}>
          <FontAwesomeIcon icon={faMessage}/>
          <Text style={style.symbolText}>{props.comments}</Text>
        </View>
        <View style={style.symbolInfo}>
          <FontAwesomeIcon icon={faBookmark}/>
          <Text style={style.symbolText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  )
}

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
}

export default UserPost