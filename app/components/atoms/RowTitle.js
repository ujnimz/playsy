import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const RowTitle = ({title}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const getStyles = ({typography, spacing, colors}) => {
  return StyleSheet.create({
    title: {
      ...typography.FONT_BOLD,
      fontSize: typography.FONT_SIZE_16,
      color: colors.PRIMARY,
      marginBottom: spacing.SCALE_16,
      textTransform: 'capitalize',
    },
  });
};

export default RowTitle;
