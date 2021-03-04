import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

const RowTitle = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View>
      <Text style={styles.title}>Recently Played</Text>
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
    },
  });
};

export default RowTitle;
