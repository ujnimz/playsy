import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';
import PlayerProgressBar from '_atoms/PlayerProgressBar';
import PlayerControls from '_atoms/PlayerControls';

import {useTheme} from '_theme/ThemeProvider';
import {windowWidth} from '_utilities/dimentions';

import BounceText from '_atoms/BounceText';

const FullPlayer = ({onCloseBottomSheet}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [curTrack, setCurTrack] = useState({title: '', artist: '', image: ''});

  useEffect(() => {
    let mounted = true;
    (async () => {
      // Set the initial track title:
      const trackId = await TrackPlayer.getCurrentTrack();
      if (!mounted || !trackId) return;
      const track = await TrackPlayer.getTrack(trackId);
      if (!mounted) return;
      setCurTrack({
        ...curTrack,
        title: track.title,
        artist: track.artist,
        image: track.artwork,
      });
    })();

    // Set the track title whenever the track changes:
    const listener = TrackPlayer.addEventListener(
      'playback-track-changed',
      async (data) => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        //console.log(track);
        if (!mounted) return;
        setCurTrack({
          ...curTrack,
          title: track.title,
          artist: track.artist,
          image: track.artwork,
        });
      },
    );
    return () => {
      mounted = false;
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerControl}>
          <Icon
            name="chevron-down-outline"
            color={theme.colors.PRIMARY}
            size={28}
            onPress={onCloseBottomSheet}
          />
          <Text style={styles.headerTitle}>{curTrack.artist}</Text>
          <Icon
            name="add-circle-outline"
            color={theme.colors.PRIMARY}
            size={28}
          />
        </View>
      </View>
      <View style={styles.body}>
        <Image
          source={{uri: curTrack.image}}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.textContent}>
          <BounceText text={curTrack.title} style={styles.title} />
          <BounceText text={curTrack.artist} style={styles.meta} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.progress}>
          <PlayerProgressBar />
        </View>

        <PlayerControls />
        <View style={styles.settings}>
          <Icon
            name="chevron-down-outline"
            color={theme.colors.PRIMARY}
            size={28}
          />
          <Icon
            name="add-circle-outline"
            color={theme.colors.PRIMARY}
            size={28}
          />
        </View>
      </View>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      paddingLeft: spacing.SCALE_18,
      paddingRight: spacing.SCALE_18,
      paddingTop: Platform.OS === 'ios' ? spacing.SCALE_12 * 2 : 0,
      //paddingBottom: Platform.OS === 'ios' ? spacing.SCALE_18 * 3 : 0,
    },
    header: {
      height: spacing.SCALE_18 * 2,
    },
    body: {
      flex: 1,
      justifyContent: 'space-around',
    },
    headerControl: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: windowWidth - spacing.SCALE_18 * 2,
      height: windowWidth - spacing.SCALE_18 * 2,
    },
    headerTitle: {
      ...typography.FONT_BOLD,
      fontSize: typography.FONT_SIZE_14,
      color: colors.PRIMARY,
    },
    textContent: {
      alignItems: 'flex-start',
    },
    title: {
      ...typography.FONT_BOLD,
      fontSize: typography.FONT_SIZE_18,
      color: colors.PRIMARY,
      marginBottom: spacing.SCALE_12,
    },
    meta: {
      ...typography.FONT_REGULAR,
      fontSize: typography.FONT_SIZE_14,
      color: colors.PLACEHOLDER,
    },
    progress: {
      alignContent: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.SCALE_16 * 2,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: spacing.SCALE_16 * 2,
    },
    settings: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.SCALE_16 * 2,
    },
  });
};

FullPlayer.propTypes = {
  onCloseBottomSheet: PropTypes.func.isRequired,
};

export default FullPlayer;
