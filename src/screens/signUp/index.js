import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import firebase from '@react-native-firebase/app';
import { StackActions, NavigationActions } from 'react-navigation';
import { PasswordInput } from '../../components';
import { assets, errors, colors } from '../../config';
import { FirebaseApi } from '../../services';
import styles from './styles';

class SignUpScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => ({ header: null });

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      password: '',
      confirmationPassword: '',
      loading: false,
      error: null,
      keyboardOpened: false
    };
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.setState({ keyboardOpened: true }));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState({ keyboardOpened: false }));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  
  onChangeName = (name) => this.setState({ name });
  onChangeEmail = (email) => this.setState({ email });
  onChangePassword = (password) => this.setState({ password });
  onChangeConfirmationPassword = (confirmationPassword) => this.setState({ confirmationPassword });
  
  onSignUpSuccess = (user = null) => {
    Keyboard.dismiss();
    this.setState({ loading: false });
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
  }

  onSignUpFail = (error) => {
    Keyboard.dismiss();
    this.setState({
      loading: false,
      error: errors.signUp.messageBycode[error.code]
    });
  }

  onAttemptSignUp = () => {
    const { name, email, password, confirmationPassword } = this.state;

    
    if (!name) { this.setState({ error: errors.login.customMessages.nameEmpty, loading: false }); return; }

    if(!email) { this.setState({ error: errors.login.customMessages.emailEmpty, loading: false }); return; }

    if(!password) { this.setState({ error: errors.login.customMessages.passwordEmpty, loading: false }); return; }
    
    if(!confirmationPassword) { this.setState({ error: errors.login.customMessages.passwordConfirmationEmpty, loading: false }); return; }
    
    this.setState({ loading: true });

    FirebaseApi.createAccount({ name, email, password }, this.onSignUpSuccess, this.onSignUpFail);
  }

  onCancel = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {
    const {
      name,
      email,
      password,
      loading,
      error,
      keyboardOpened
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
            <Image source={assets.images.logoWithName} />
            <TextInput
                style={styles.input}
                placeholder={'N  O  M  E'}
                keyboardType={'email-address'}
                onChangeText={this.onChangeName}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder={'E  M  A  I  L'}
                keyboardType={'email-address'}
                onChangeText={this.onChangeEmail}
                value={email}
            />
            <PasswordInput
              onKeyPress={this.onKeyPressPassword}
              componentStyle={styles.input}
              placeholder={'S  E  N  H  A'}
              onChangeText={this.onChangePassword}
            />
            <PasswordInput
              onKeyPress={this.onKeyPressPassword}
              componentStyle={styles.input}
              placeholder={'C  O  N  F  I  R  M  A  Ç  Ã  O   D  E   S   E   N   H   A'}
              onChangeText={this.onChangeConfirmationPassword}
            />
            <TouchableOpacity style={styles.signInButton} onPress={this.onAttemptSignUp}>
              {loading ? <ActivityIndicator size="small" color={colors.white} /> : <Text style={styles.signInLabel}>Criar Conta</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={this.onCancel}>
                <Text style={styles.signUpLabel}>Cancelar</Text>
            </TouchableOpacity>
            {error ? <Text style={styles.errorLabel}>{error}</Text> : null}
        </View>
        <View style={styles.footer}>
          { keyboardOpened ? null : <Text style={styles.label}>D E S I G N  C O M  C O N T E Ú D O</Text> }
        </View>
      </View>
    );
  }
}

export default SignUpScreen;