import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const logo = require('_assets/images/logo.png');

const WelcomeScreen = ({navigation}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} resizeMode="stretch" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Feel free to listen</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>v.0.01</Text>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const LOGO_HEIGHT = height * 0.15;

const getStyles = ({colors, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.BACKGROUND,
      paddingTop: spacing.SCALE_28,
    },
    header: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 26,
      color: colors.PRIMARY,
      textTransform: 'uppercase',
      marginBottom: 30,
    },
    signupButton: {
      alignItems: 'center',
      backgroundColor: colors.PRIMARY,
      padding: 10,
      width: 200,
      borderRadius: 30,
      marginBottom: 15,
    },
    signupButtonText: {
      textTransform: 'uppercase',
      color: colors.TEXTCONTRAST,
      fontWeight: 'bold',
    },
    loginButton: {
      alignItems: 'center',
      backgroundColor: colors.SECONDARY,
      padding: 10,
      width: 200,
      borderRadius: 30,
      marginBottom: 15,
    },
    loginButtonText: {
      textTransform: 'uppercase',
      color: colors.TEXTCONTRAST,
      fontWeight: 'bold',
    },
    content: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: LOGO_HEIGHT,
      height: LOGO_HEIGHT,
    },
    footer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 34,
    },
    footerText: {
      color: colors.PRIMARY,
      fontSize: 11,
    },
  });
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
