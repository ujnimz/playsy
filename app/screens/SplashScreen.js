import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authStatus} from '_redux/actions/auth';

import AppLoading from '_atoms/AppLoading';
import AuthStackScreen from '_navigations/AuthStackScreen';
import AppStackScreen from '_navigations/AppStackScreen';

const SplashScreen = ({authState, authStatus}) => {
  const {isLoading, user} = authState;

  useEffect(() => {
    authStatus();
  }, [user]);

  if (isLoading) return <AppLoading />;

  if (!user) {
    return <AuthStackScreen />;
  }
  return <AppStackScreen />;
};

SplashScreen.propTypes = {
  authStatus: PropTypes.func.isRequired,
  authState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps, {authStatus})(SplashScreen);
