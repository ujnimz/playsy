import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL,
  AUTH_LOADING,
} from './types';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('users');

import {Alert} from 'react-native';

// User Sign in
export const authStatus = () => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    await auth().onAuthStateChanged((user) => {
      if (user) {
        return dispatch({
          type: AUTH_SUCCESS,
          payload: user,
        });
      } else {
        return dispatch({
          type: AUTH_SUCCESS,
          payload: null,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: AUTH_FAIL,
    });
  }
};

// User Sign in
export const signIn = (user) => async (dispatch) => {
  const {email, password} = user;
  if (email === '' || password === '')
    return Alert.alert('Invalid!', 'Please check your login details again.');
  dispatch(setAuthLoading());
  try {
    const authUser = await auth().signInWithEmailAndPassword(email, password);
    return dispatch({
      type: SIGNIN_SUCCESS,
      payload: authUser,
    });
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      Alert.alert('User not found.', 'Please check your login details again.');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert(
        'Email address is invalid!',
        'Please check your email address again.',
      );
    }

    if (error.code === 'auth/wrong-password') {
      Alert.alert(
        'Password is incorrect!',
        'Please check your password again.',
      );
    }
    return dispatch({
      type: SIGNIN_FAIL,
    });
  }
};

// User Sign up
export const signUp = (user) => async (dispatch) => {
  const {name, email, password} = user;
  if (name === '' || email === '' || password === '')
    return Alert.alert('Invalid!', 'Please check your login details again.');
  dispatch(setAuthLoading());
  try {
    const newUser = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await usersCollection.doc(newUser.user.uid).set({
      name,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    return dispatch({
      type: SIGNUP_SUCCESS,
    });
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      Alert.alert('User not found.', 'Please check your login details again.');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert(
        'Email address is invalid!',
        'Please check your email address again.',
      );
    }

    if (error.code === 'auth/wrong-password') {
      Alert.alert(
        'Password is incorrect!',
        'Please check your password again.',
      );
    }
    return dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

// User Sign out
export const signOut = () => async (dispatch) => {
  dispatch(setAuthLoading());
  try {
    await auth().signOut();
    return dispatch({
      type: SIGNOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: SIGNOUT_FAIL,
    });
  }
};

// Set Loading
export const setAuthLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};
