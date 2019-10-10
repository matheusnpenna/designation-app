import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { LargeButton } from '../../components';
import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => ({ header: null });
  constructor(props){
    super(props);
    this.state = {

    };
  }

  onPressCreateContent = 
    () => 
      this.
      props.
      navigation.
      navigate('WorkPlace');

  render() {
    return (
      <View style={styles.container}>
        <LargeButton
          text={'Criar Conteúdo'}
          onPress={this.onPressCreateContent} />
      </View>
    );
  }
}

export default HomeScreen;