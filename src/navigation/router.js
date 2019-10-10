import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  ResetPasswordScreen,
  WorkPlaceScreen
} from "../screens";

const loggedStack = {
  Home: {
    screen: HomeScreen
  },
  WorkPlace: {
    screen: WorkPlaceScreen
  }
};

const stack = {
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
  ResetPassword: { screen: ResetPasswordScreen },
  ...loggedStack
};

const AppNavigator = createAppContainer(createStackNavigator(stack));

const LoggedAppNavigator = createAppContainer(createStackNavigator(loggedStack));

export {
  AppNavigator,
  LoggedAppNavigator
} 