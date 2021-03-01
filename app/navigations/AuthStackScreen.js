import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '_screens/WelcomeScreen';
import SignInScreen from '_screens/SignInScreen';
import SignUpScreen from '_screens/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
