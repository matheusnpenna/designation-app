/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';
import { AppNavigator, LoggedAppNavigator } from './navigation';
import { FirebaseApi } from './services';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      navigator: <AppNavigator/>
    } 
    
    AsyncStorage
      .getItem('sessionState')
      .then(sessionState => {
        if (sessionState.authState) {
          this.setState({ navigator: <LoggedAppNavigator/> });
        }
      });

    FirebaseApi.checkAuthState(user => {
      if (user) { // user is logged and return logged state
        AsyncStorage
        .setItem('sessionState', 
          JSON.stringify({ authState: true, ...user }));
        this.setState({ navigator: <LoggedAppNavigator/> });
      }
    })

  }
  render() {
    const { navigator } = this.state;
    return navigator;
  }
}
