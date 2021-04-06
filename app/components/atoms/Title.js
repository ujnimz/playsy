import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const RowTitle = ({title}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const getStyles = ({typography, spacing, colors}) => {
  return StyleSheet.create({
    container: {
      marginLeft: spacing.SCALE_8 * 2,
    },
    title: {
      ...typography.FONT_BOLD,
      fontSize: typography.FONT_SIZE_16,
      color: colors.PRIMARY,
      textTransform: 'capitalize',
    },
  });
};

export default RowTitle;
