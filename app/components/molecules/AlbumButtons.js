import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '_theme/ThemeProvider';

import IconButton from '_atoms/IconButton';

const AlbumButtons = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.controlPanel}>
        <IconButton
          icon="share-social"
          bgColor={theme.colors.SECONDARY}
          iconColor={theme.colors.PRIMARY}
        />
        <IconButton
          icon="play"
          bgColor={theme.colors.SECONDARY}
          iconColor={theme.colors.WHITE}
          text="Play"
        />
        <IconButton
          icon="heart-outline"
          bgColor={theme.colors.SECONDARY}
          iconColor={theme.colors.PRIMARY}
        />
      </View>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      padding: spacing.SCALE_12,
    },
    controlPanel: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: spacing.SCALE_18,
      paddingBottom: spacing.SCALE_18,
    },
    shareIcon: {
      color: colors.PRIMARY,
      padding: spacing.SCALE_12,
      backgroundColor: colors.SECONDARY,
      borderRadius: 20,
      overflow: 'hidden',
    },
    playIcon: {
      color: colors.PRIMARY,
      padding: spacing.SCALE_12,
      backgroundColor: colors.SECONDARY,
      borderRadius: 20,
      overflow: 'hidden',
    },
    playText: {
      paddingLeft: 25,
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_14,
      ...typography.FONT_BOLD,
    },
    shadowContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'black',
    },
  });
};

export default AlbumButtons;
