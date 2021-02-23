import React from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar} from 'react-native';
import {useTheme} from './ThemeProvider';

const ThemeScreen = ({children}) => {
  const {colors, isDark} = useTheme();

  const containerStyle = {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 30,
    backgroundColor: colors.background,
  };

  return (
    <>
      <StatusBar
        animated
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <View style={containerStyle}>{children}</View>
    </>
  );
};

ThemeScreen.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeScreen;
