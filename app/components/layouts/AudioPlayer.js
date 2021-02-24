import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '../../utilities/ThemeProvider';
import {gapSize} from '../../utilities/Dimentions';

const PlayerScreen = () => {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <Text>Music Player</Text>
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: gapSize,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
    },
  });
};

export default PlayerScreen;
