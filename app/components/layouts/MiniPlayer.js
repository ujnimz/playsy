import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../utilities/ThemeProvider';
import {gapSize, miniPlayerHeight} from '../../utilities/Dimentions';

const logo = require('../../assets/images/artist.jpg');

const MiniPlayer = () => {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.image} />
        <View style={styles.textContent}>
          <Text style={styles.title}>Athma Liyanage</Text>
          <Text style={styles.meta}>Athma Liyanage</Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <Icon name="play" size={34} />
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
    },
    titleView: {
      justifyContent: 'flex-start',
    },
    iconView: {
      justifyContent: 'center',
      marginRight: gapSize,
    },
    content: {
      flexDirection: 'row',
    },
    textContent: {
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
  });
};

export default MiniPlayer;
