import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../../utilities/ThemeProvider';
import {
  gapSize,
  miniPlayerHeight,
  windowWidth,
} from '../../utilities/Dimentions';

const artist = require('../../assets/images/artist.jpg');

const FullPlayer = ({onCloseBottomSheet}) => {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerControl}>
          <Icon
            name="chevron-down-outline"
            color={colors.text}
            size={28}
            onPress={onCloseBottomSheet}
          />
          <Text style={styles.headerTitle}>Athma Liyanage</Text>
          <Icon name="add-circle-outline" color={colors.text} size={28} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.imageContent}>
          <Image source={artist} style={styles.image} />
        </View>
        <View style={styles.textContent}>
          <TextTicker
            style={styles.title}
            duration={4000}
            animationType="bounce"
            marqueeDelay={2000}>
            Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage
          </TextTicker>
          <TextTicker
            style={styles.meta}
            duration={4000}
            animationType="bounce"
            repeatSpacer={80}
            marqueeDelay={2000}>
            Athma Liyanage
          </TextTicker>
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
          <Icon name="play-skip-back-sharp" color={colors.text} size={28} />
          <Icon
            name="play-circle-sharp"
            color={colors.text}
            size={windowWidth / 6}
          />
          <Icon name="play-skip-forward-sharp" color={colors.text} size={28} />
        </View>
        <View style={styles.settings}>
          <Icon name="chevron-down-outline" color={colors.text} size={28} />
          <Icon name="add-circle-outline" color={colors.text} size={28} />
        </View>
      </View>
    </View>
  );
};

const getStyles = (colors) => {
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

export default FullPlayer;
