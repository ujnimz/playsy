import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import {useTheme} from '../../utilities/ThemeProvider';
import ThemeToggle from './ThemeToggle';

const AppLoading = () => {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      paddingTop: 44,
    },
  });
};

export default AppLoading;
