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

class ResetPasswordScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => ({ header: null });

  constructor(props){
    super(props);
    this.state = {
      email: '',
      loading: false,
      error: null,
      sended: false
    };
    this.emailInput = null;
    this.emailPassword = null;
  }

  onChangeEmail = (email) => this.setState({ email });

  sendSuccess = () => {
    this.setState({ sended: true });
  }
  
  onSendFail = (error) => {
    this.setState({
      loading: false,
      error: errors.passwordRecovery.messageBycode[error.code] 
    });
  }

  onSendRecuveryPassword = () => {
    Keyboard.dismiss();
    const { email } = this.state;

    if (!email) { this.setState({ error: errors.passwordRecovery.customMessages.emptyEmail })}
    
    this.setState({ loading: true });
    
    FirebaseApi.sendRecuveryPassword(email, this.sendSuccess, this.onSendFail);
  }

  onCancel = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {
    const { email, sended, error, loading } = this.state;
    const onEditRender = (
      <View style={styles.container}>
            <Image source={assets.images.logoWithName} />
            <Text style={styles.label}>R E C U P E R A R  S E N H A</Text>
            <TextInput
              ref={emailInput => this.emailInput = emailInput}
              style={styles.input}
              placeholder={'E  M  A  I  L'}
              keyboardType={'email-address'}
              onKeyPress={this.onKeyPressEmail}
              onChangeText={this.onChangeEmail}
              value={email}
            />
            <TouchableOpacity style={styles.signInButton} onPress={this.onSendRecuveryPassword}>
              {loading ? <ActivityIndicator size="small" color={colors.white} /> : <Text style={styles.signInLabel}>Enviar Recuperação de Senha</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={this.onCancel}>
                <Text style={styles.signUpLabel}>Cancelar</Text>
            </TouchableOpacity>
            {error  ? <Text style={styles.errorLabel}>{error}</Text> : null}
      </View>
    );

    const sendedRender = (
      <View style={styles.container}>
            <Image source={assets.images.logoWithName} />
            <Text style={styles.label}>E  N  V  I  A  D  O</Text>
            <TouchableOpacity style={styles.signUpButton} onPress={this.onCancel}>
                <Text style={styles.signUpLabel}>Voltar</Text>
            </TouchableOpacity>
      </View>
    );

    return sended ? sendedRender : onEditRender;
  }
}

export default ResetPasswordScreen;