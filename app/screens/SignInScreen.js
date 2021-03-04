import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {signIn} from '_redux/actions/auth';

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

import {useTheme} from '_theme/ThemeProvider';

const SignInScreen = ({navigation, signIn, authState}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

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
    signIn(data);
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

            <TouchableOpacity onPress={() => alert('Password Forgot')}>
              <Text style={styles.forgotLink}>Forgot your password?</Text>
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

SignInScreen.propTypes = {
  authState: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authState,
});

export default connect(mapStateToProps, {signIn})(SignInScreen);
