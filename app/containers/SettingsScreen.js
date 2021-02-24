import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';

import {signOut} from '../redux/actions/auth';

import {useTheme} from '../utilities/ThemeProvider';
import {windowHeight} from '../utilities/Dimentions';

import FormButton from '../components/forms/FormButton';

function SettingsScreen(props) {
  const {signOut} = props;
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <FormButton
        onPress={signOut}
        buttonTitle="Logout"
        backgroundColor={colors.primary}
        color={colors.contrastText}
      />
    </View>
  );
}

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
};

SettingsScreen.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default connect(null, {signOut})(SettingsScreen);
