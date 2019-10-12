import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        password: ''
    };
  }

  onChange = (password) => 
    this.setState({ password }, 
        () =>
            this.props.onChangeText(password));

  render() {
      const { password } = this.state;
      const { placeholder, componentStyle, onKeyPress } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
            onKeyPress={onKeyPress}
            secureTextEntry={true}
            multiline={false}
            style={componentStyle}
            textContentType={'password'}
            placeholder={placeholder}
            onChangeText={this.onChange}
            value={password}
        />
        {/* put here the show hide password for make this action put: keyboardType={'visible-password'} on TextInput  */}
      </View>
    );
  }
}
export default PasswordInput;