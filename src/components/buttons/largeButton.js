import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class LargeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.largeButtonContainer}>
        <Text style={styles.label}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default LargeButton;
