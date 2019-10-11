import React, {Component} from 'react';
import {Platform, TouchableOpacity, View, Image} from 'react-native';
import { LargeButton } from '../../components';
import styles from './styles';
import { colors, assets } from '../../config';

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
        {/* The user's feed will stay here*/}
        <View style={styles.footer}>
          {/* Some feature*/}
           <TouchableOpacity onPress={this.onPressCreateContent} style={styles.addbuttonContaner}>
              <Image source={assets.icons.plus} style={styles.addButtonIcon} />
           </TouchableOpacity>
          {/* Another feature (Maybe product recommendations)*/}
        </View>
      </View>
    );
  }
}

export default HomeScreen;