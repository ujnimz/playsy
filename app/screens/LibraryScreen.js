import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const LibraryScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library</Text>
    </View>
  );
};

const getStyles = ({colors, typography}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.BACKGROUND,
    },
    text: {
      color: colors.PRIMARY,
      fontSize: 18,
      ...typography.FONT_BOLD,
    },
  });
};

export default LibraryScreen;
