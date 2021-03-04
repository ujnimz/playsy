import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';

import BounceText from '_atoms/BounceText';

const artist = require('_assets/images/artist.jpg');

const MiniPlayer = ({onOpenBottomSheet}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={artist} style={styles.image} />
        <Pressable style={styles.textContent} onPress={onOpenBottomSheet}>
          <BounceText
            text="Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage"
            style={styles.title}
            shouldAnimateTreshold={1}
          />
          <BounceText text="Athma Liyanage" style={styles.meta} />
        </Pressable>
      </View>
      <View style={styles.iconView}>
        <Icon name="play" style={styles.icon} size={34} />
      </View>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      height: spacing.SCALE_18 * 3,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.SECONDARY,
    },
    titleView: {
      justifyContent: 'flex-start',
    },
    content: {
      flex: 1,
      flexDirection: 'row',
    },
    textContent: {
      flex: 1,
      padding: spacing.SCALE_8,
    },
    title: {
      ...typography.FONT_MEDIUM,
      fontSize: typography.FONT_SIZE_14,
      color: colors.PRIMARY,
    },
    meta: {
      ...typography.FONT_REGULAR,
      fontSize: typography.FONT_SIZE_12,
      color: colors.PRIMARY,
    },
    image: {
      width: spacing.SCALE_18 * 3,
      height: spacing.SCALE_18 * 3,
    },
    iconView: {
      justifyContent: 'center',
      padding: spacing.SCALE_12,
    },
    icon: {
      color: colors.PRIMARY,
    },
  });
};

MiniPlayer.propTypes = {
  onOpenBottomSheet: PropTypes.func.isRequired,
};

export default MiniPlayer;
