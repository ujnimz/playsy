import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const AppLoading = () => {
  const theme = useTheme();

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={theme.colors.secondary} />
    </View>
  );
};

const getStyles = ({colors}) => {
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
