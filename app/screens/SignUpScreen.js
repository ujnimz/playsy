import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {signUp} from '_redux/actions/auth';

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

import FormTextInput from '_atoms/FormTextInput';
import FormPasswordInput from '_atoms/FormPasswordInput';
import FormButton from '_atoms/FormButton';

import {gapSize} from '_utilities/Dimentions';
import {useTheme} from '_theme/ThemeProvider';

const SignUpScreen = ({navigation, signUp, authState}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

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
              backgroundColor={theme.colors.SECONDARY}
              color={theme.colors.TEXTCONTRAST}
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
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
      padding: spacing.SCALE_18,
    },
    header: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
    icon: {
      color: colors.PRIMARY,
    },
    title: {
      ...typography.FONT_BOLD,
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_28,
    },
    body: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    forgotLink: {
      ...typography.FONT_MEDIUM,
      color: colors.PLACEHOLDER,
    },
  });
};

SignUpScreen.propTypes = {
  authState: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps, {signUp})(SignUpScreen);
