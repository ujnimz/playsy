import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../containers/WelcomeScreen';
import SignInScreen from '../containers/SignInScreen';
import SignUpScreen from '../containers/SignUpScreen';

const WelcomeStack = createStackNavigator();

const WelcomeStackScreen = () => {
  return (
    <WelcomeStack.Navigator headerMode="none">
      <WelcomeStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <WelcomeStack.Screen name="SignInScreen" component={SignInScreen} />
      <WelcomeStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </WelcomeStack.Navigator>
  );
};

export default WelcomeStackScreen;
