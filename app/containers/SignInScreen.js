import React, {useState} from 'react';
import PropTypes from 'prop-types';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import FormTextInput from '../components/forms/FormTextInput';
import FormPasswordInput from '../components/forms/FormPasswordInput';
import FormButton from '../components/forms/FormButton';

import {windowWidth} from '../utilities/Dimentions';
import {useTheme} from '../utilities/ThemeProvider';

function SignInScreen({navigation}) {
  const {colors} = useTheme();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onChangeEmail = (value) => {
    setData({
      ...data,
      email: value,
    });
  };

  const onChangePassword = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const onSignIn = () => {
    if (data.email === '' || data.password === '')
      return Alert.alert('Invalid!', 'Please check your login details again.');
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          Alert.alert(
            'User not found.',
            'Please check your login details again.',
          );
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
      });
  };

  const styles = getStyles(colors);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.root}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              style={styles.icon}
              name="chevron-back"
              size={36}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.title}>Welcome back!</Text>
          </View>

          <View style={styles.body}>
            <FormTextInput
              inputValue={data.email}
              onChangeText={(text) => onChangeEmail(text)}
              placeholderText="Email"
              keboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
            />

            <FormPasswordInput
              inputValue={data.password}
              onChangeText={(text) => onChangePassword(text)}
              placeholderText="Password"
            />

            <FormButton
              onPress={onSignIn}
              buttonTitle="Log in"
              backgroundColor={colors.primary}
              color={colors.contrastText}
            />

            <TouchableOpacity onPress={() => alert('Password Forgot')}>
              <Text>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const getStyles = (colors) => {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      paddingLeft: windowWidth / 15,
    },
    icon: {
      color: colors.text,
    },
    title: {
      color: colors.text,
      fontSize: 28,
      fontWeight: 'bold',
    },
    body: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      padding: windowWidth / 15,
    },
  });
};

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignInScreen;
