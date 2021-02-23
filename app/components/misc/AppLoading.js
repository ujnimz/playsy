import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '../../utilities/ThemeProvider';
import ThemeToggle from './ThemeToggle';

function AppLoading() {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <Text>AppLoading...</Text>
      <ThemeToggle />
    </View>
  );
}

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
