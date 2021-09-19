import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

import {signOut} from '_redux/actions/auth';

import {useTheme} from '_theme/ThemeProvider';
// import {windowHeight} from '_utilities/dimentions';

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

      <View style={styles.settingsRow}>
        <View>
          <Text style={styles.settingsRowText}>Account Settings</Text>
        </View>
        <View>
          <ThemeToggle />
        </View>
      </View>

      <View style={styles.settingsRow}>
        <View>
          <Text style={styles.settingsRowText}>Notifications</Text>
        </View>
        <View>
          <ThemeToggle />
        </View>
      </View>

      <View style={styles.settingsRow}>
        <View>
          <Text style={styles.settingsRowText}>About</Text>
        </View>
        <View>
          <ThemeToggle />
        </View>
      </View>

      <View style={styles.footer}>
        <FormButton
          onPress={signOut}
          buttonTitle="Logout"
          backgroundColor={theme.colors.PRIMARY}
          color={theme.colors.TEXTCONTRAST}
        />
      </View>
    </View>
  );
};

const getStyles = ({colors, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'flex-start',
      backgroundColor: colors.BACKGROUND,
    },
    settingsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: spacing.SCALE_8,
    },
    footer: {
      alignItems: 'center',
    },
    settingsRowText: {
      color: colors.PRIMARY,
    },
  });
};

SettingsScreen.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default connect(null, {signOut})(SettingsScreen);
