import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

import {signOut} from '_redux/actions/auth';

import {useTheme} from '_theme/ThemeProvider';
import {windowHeight} from '_utilities/Dimentions';

import FormButton from '_atoms/FormButton';
import ThemeToggle from '_atoms/ThemeToggle';

const SettingsScreen = ({signOut}) => {
  const theme = useTheme();

  const styles = getStyles(theme);

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
        backgroundColor={theme.colors.primary}
        color={theme.colors.contrastText}
      />
    </View>
  );
};

const getStyles = ({colors}) => {
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
