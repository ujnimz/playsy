import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '../../../utilities/ThemeProvider';
import {gapSize} from '../../../utilities/Dimentions';

const ThumbTitle = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <View>
      <Text style={styles.title}>Recently Played</Text>
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: gapSize,
    },
  });
};

export default ThumbTitle;
