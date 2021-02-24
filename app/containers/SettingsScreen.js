import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

import {signOut} from '../redux/actions/auth';

import {useTheme} from '../utilities/ThemeProvider';
import {windowHeight} from '../utilities/Dimentions';

import FormButton from '../components/forms/FormButton';
import ThemeToggle from '../components/misc/ThemeToggle';

const SettingsScreen = (props) => {
  const {signOut} = props;
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.settingsRow}>
        <View>
          <Text style={styles.settingsRowText}>Dark Mode</Text>
        </View>
        <View>
          <ThemeToggle />
        </View>
      </View>

      <FormButton
        onPress={signOut}
        buttonTitle="Logout"
        backgroundColor={colors.primary}
        color={colors.contrastText}
      />
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: windowHeight / 50,
      backgroundColor: colors.background,
    },
    settingsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    settingsRowText: {
      color: colors.text,
    },
  });
};

SettingsScreen.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default connect(null, {signOut})(SettingsScreen);
