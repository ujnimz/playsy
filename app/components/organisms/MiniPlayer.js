import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';
import {gapSize, miniPlayerHeight} from '_utilities/Dimentions';

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

const getStyles = ({colors}) => {
  return StyleSheet.create({
    container: {
      height: miniPlayerHeight,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
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
      padding: gapSize / 3,
    },
    title: {
      fontSize: 13,
      fontWeight: '500',
      color: colors.text,
    },
    meta: {
      fontSize: 11,
      color: colors.text,
    },
    image: {
      width: miniPlayerHeight,
      height: miniPlayerHeight,
    },
    iconView: {
      justifyContent: 'center',
      marginRight: gapSize,
    },
    icon: {
      color: colors.text,
    },
  });
};

MiniPlayer.propTypes = {
  onOpenBottomSheet: PropTypes.func.isRequired,
};

export default MiniPlayer;
