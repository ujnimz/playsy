import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {useTheme} from '../utilities/ThemeProvider';
import {windowHeight} from '../utilities/Dimentions';

function PlayerScreen() {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <Text>Player</Text>
    </View>
  );
}

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: windowHeight / 15,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
};

export default PlayerScreen;
