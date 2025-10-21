import React, {useState} from "react"
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import style from "./style"

const Input = props => {
  const [value, setValue] = useState("")

    return (
  <View>
    <Text style={style.label}>{props.label}</Text>
    <TextInput
      style={style.input}
      placeholder={props.placeHolder}
      value={value}
      onChangeText={(val) => {
        setValue(val)
        props.onChangeText(val)
      }}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  </View>
    )
}

Input.defaultProps = {
  placeHolder: "",
  onChangeText: () => {},
  secureTextEntry: false,
  keyboardType: "default",
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
}

export default Input