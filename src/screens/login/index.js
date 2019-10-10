import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  AsyncStorage
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from '@react-native-firebase/app';
import { PasswordInput } from '../../components';
import { assets, errors, colors } from '../../config';
import { FirebaseApi } from '../../services';
import styles from './styles';

class LoginScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => ({ header: null });

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: null,
      secureTextEntry: true
    };
    this.emailInput = null;
    this.emailPassword = null;
  }

  onChangeEmail = (email) => this.setState({ email });
  
  onChangePassword = (password) => this.setState({ password });
  
  onAttemptSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  onLoginSuccess = (user = null) => {

    if (user) {
      AsyncStorage
        .setItem('sessionState', 
          JSON.stringify({ authState: true, ...user }));
    }
    
    this.props
    .navigation
    .dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home',
          params: { },
        }),
      ],
    }))
    this.setState({ loading: false });
  }

  onLoginFail = (error) => {
    Keyboard.dismiss();
    this.setState({
      loading: false,
      error: errors.login.messageBycode[error.code]
    });
  }

  onAttemptSignIn = () => {
    Keyboard.dismiss();
    const { email, password } = this.state;

    if(!email) { this.setState({ error: errors.login.customMessages.emailEmpty }); return; }
    
    if(!password) { this.setState({ error: errors.login.customMessages.passwordEmpty }); return; }
    
    this.setState({ loading: true });

    FirebaseApi.login({ email, password }, this.onLoginSuccess, this.onLoginFail);
  }

  onKeyPressEmail = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === 'Enter') {
      Keyboard.dismiss();
      this.emailInput.focus();
    }
  }

  onKeyPressPassword = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === 'Enter') {
      Keyboard.dismiss();
      this.onAttemptSignIn();
    }
  }

  onResetPassword = () => {
    this.props.navigation.navigate('ResetPassword');
  }

  render() {
    const { email, password, error, loading } = this.state;
    return (
      <View style={styles.container}>
            <Image source={assets.images.logoWithName} />
            <Text style={styles.label}>L  O  G  I  N</Text>
            <TextInput
              ref={emailInput => this.emailInput = emailInput}
              style={styles.input}
              placeholder={'E  M  A  I  L'}
              keyboardType={'email-address'}
              onKeyPress={this.onKeyPressEmail}
              onChangeText={this.onChangeEmail}
              value={email}
            />
            <PasswordInput
              onKeyPress={this.onKeyPressPassword}
              componentStyle={styles.input}
              placeholder={'S  E  N  H  A'}
              onChangeText={this.onChangePassword}
            />
            <TouchableOpacity style={styles.signInButton} onPress={this.onAttemptSignIn}>
              {loading ? <ActivityIndicator size="small" color={colors.white} /> : <Text style={styles.signInLabel}>Entrar</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={this.onAttemptSignUp}>
              <Text style={styles.signUpLabel}>Criar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={this.onResetPassword}>
              <Text style={styles.signUpLabel}>Esqueci minha senha</Text>
            </TouchableOpacity>
            {error  ? <Text style={styles.errorLabel}>{error}</Text> : null}
      </View>
    );
  }
}

export default LoginScreen;