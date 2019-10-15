import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const LargeButton = (props) => {

    const {
      text,
      onPress,
      containerCustomStyle,
      textCustomStyle
    } = props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={containerCustomStyle ? containerCustomStyle : styles.largeButtonContainer}>
        <Text style={textCustomStyle ? textCustomStyle : styles.label}>{text}</Text>
      </TouchableOpacity>
    );
}

export default LargeButton;
