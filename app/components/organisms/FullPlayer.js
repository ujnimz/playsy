import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';
import {gapSize, windowWidth} from '_utilities/Dimentions';

import BounceText from '_atoms/BounceText';

const artist = require('_assets/images/artist.jpg');

const FullPlayer = ({onCloseBottomSheet}) => {
  const theme = useTheme();

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerControl}>
          <Icon
            name="chevron-down-outline"
            color={theme.colors.text}
            size={28}
            onPress={onCloseBottomSheet}
          />
          <Text style={styles.headerTitle}>Athma Liyanage</Text>
          <Icon name="add-circle-outline" color={theme.colors.text} size={28} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.imageContent}>
          <Image source={artist} style={styles.image} />
        </View>
        <View style={styles.textContent}>
          <BounceText
            text="Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage"
            style={styles.title}
          />
          <BounceText text="Athma Liyanage" style={styles.meta} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.progress}>
          <View style={styles.progressTime}>
            <Text style={styles.progressTimeText}>0.00</Text>
            <Text style={styles.progressTimeText}>3.45</Text>
          </View>

          <View style={styles.progressBar}></View>
        </View>

        <View style={styles.controls}>
          <Icon
            name="play-skip-back-sharp"
            color={theme.colors.text}
            size={28}
          />
          <Icon
            name="play-circle-sharp"
            color={theme.colors.text}
            size={windowWidth / 6}
          />
          <Icon
            name="play-skip-forward-sharp"
            color={theme.colors.text}
            size={28}
          />
        </View>
        <View style={styles.settings}>
          <Icon
            name="chevron-down-outline"
            color={theme.colors.text}
            size={28}
          />
          <Icon name="add-circle-outline" color={theme.colors.text} size={28} />
        </View>
      </View>
    </View>
  );
};

const getStyles = ({colors}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: gapSize,
      marginBottom: gapSize * 4,
    },
    header: {
      justifyContent: 'space-evenly',
    },
    body: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
    footer: {
      justifyContent: 'space-evenly',
    },
    headerControl: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    imageContent: {
      backgroundColor: 'black',
    },
    image: {
      width: windowWidth - gapSize * 2,
      height: windowWidth - gapSize * 2,
    },
    textContent: {
      alignItems: 'flex-start',
    },
    headerTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.text,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: gapSize / 4,
    },
    meta: {
      fontSize: 14,
      color: colors.subText,
    },
    progress: {
      alignContent: 'center',
      justifyContent: 'space-between',
    },
    progressTime: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    progressTimeText: {
      fontSize: 12,
      color: colors.subText,
    },
    progressBar: {
      height: 2,
      backgroundColor: colors.grey,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingTop: 15,
    },
    settings: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 15,
    },
  });
};

FullPlayer.propTypes = {
  onCloseBottomSheet: PropTypes.func.isRequired,
};

export default FullPlayer;
