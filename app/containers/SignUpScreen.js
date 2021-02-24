import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {signUp} from '../redux/actions/auth';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import FormTextInput from '../components/forms/FormTextInput';
import FormPasswordInput from '../components/forms/FormPasswordInput';
import FormButton from '../components/forms/FormButton';

import {windowWidth} from '../utilities/Dimentions';
import {useTheme} from '../utilities/ThemeProvider';

function SignUpScreen(props) {
  const {navigation, signUp, authState} = props;
  const {colors} = useTheme();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeName = (value) => {
    setData({
      ...data,
      name: value,
    });
  };

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

  const onSignUp = () => {
    signUp(data);
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
            <Text style={styles.title}>Let's Get Started!</Text>
          </View>

          <View style={styles.body}>
            <FormTextInput
              inputValue={data.name}
              onChangeText={(text) => onChangeName(text)}
              placeholderText="Name"
              autoCapitalize="words"
              autoCorrect={false}
              autoFocus={true}
            />

            <FormTextInput
              inputValue={data.email}
              onChangeText={(text) => onChangeEmail(text)}
              placeholderText="Email"
              keboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <FormPasswordInput
              inputValue={data.password}
              onChangeText={(text) => onChangePassword(text)}
              placeholderText="Password"
            />

            <FormButton
              onPress={onSignUp}
              buttonTitle="Sign Up"
              backgroundColor={colors.primary}
              color={colors.contrastText}
            />
            {
              <ActivityIndicator
                size="small"
                color="#0000ff"
                animating={authState.isLoading}
              />
            }

            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.forgotLink}>Have an account?</Text>
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
      padding: windowWidth / 15,
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
    forgotLink: {
      color: colors.placeHolder,
      fontWeight: 'bold',
    },
  });
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps, {signUp})(SignUpScreen);
