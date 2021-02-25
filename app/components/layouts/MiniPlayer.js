import React from 'react';
import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../utilities/ThemeProvider';
import {gapSize, miniPlayerHeight} from '../../utilities/Dimentions';

const artist = require('../../assets/images/artist.jpg');

const MiniPlayer = () => {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={artist} style={styles.image} />
        <View style={styles.textContent}>
          <TextTicker
            style={styles.title}
            duration={4000}
            animationType="bounce"
            marqueeDelay={2000}
            shouldAnimateTreshold={10}>
            Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage
          </TextTicker>
          <TextTicker
            style={styles.meta}
            duration={4000}
            animationType="bounce"
            marqueeDelay={2000}
            shouldAnimateTreshold={10}>
            Athma Liyanage
          </TextTicker>
        </View>
      </View>
      <View style={styles.iconView}>
        <Icon name="play" color={colors.text} size={34} />
      </View>
    </View>
  );
};

const getStyles = (colors) => {
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
  });
};

export default MiniPlayer;
