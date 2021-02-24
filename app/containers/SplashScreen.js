import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authStatus} from '../redux/actions/auth';

import AppLoading from '../components/misc/AppLoading';
//import HomeScreen from './HomeScreen';
import AuthStackScreen from '../navigation/AuthStackScreen';
import AppStackScreen from '../navigation/AppStackScreen';

function SplashScreen({authState, authStatus}) {
  const {isLoading, user} = authState;

  useEffect(() => {
    authStatus();
  }, [user]);

  if (isLoading) return <AppLoading />;

  if (!user) {
    return <AuthStackScreen />;
  }
  return <AppStackScreen />;
}

SplashScreen.propTypes = {
  authStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps, {authStatus})(SplashScreen);
