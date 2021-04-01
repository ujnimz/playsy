import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import {useTheme} from '_theme/ThemeProvider';

import BounceText from '_atoms/BounceText';

const MiniPlayer = ({onOpenBottomSheet}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const playbackState = usePlaybackState();

  const [curTrack, setCurTrack] = useState({title: '', artist: '', image: ''});

  useEffect(() => {
    let mounted = true;
    //let listener = null;
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

  const trackPlay = () => {
    TrackPlayer.play();
  };

  const trackPause = () => {
    TrackPlayer.pause();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: curTrack.image}} style={styles.image} />
        <Pressable style={styles.textContent} onPress={onOpenBottomSheet}>
          <BounceText
            text={curTrack.title}
            style={styles.title}
            shouldAnimateTreshold={1}
          />
          <BounceText text={curTrack.artist} style={styles.meta} />
        </Pressable>
      </View>
      <View style={styles.iconView}>
        {playbackState === TrackPlayer.STATE_PLAYING ? (
          <Icon
            name="pause"
            style={styles.icon}
            size={34}
            onPress={() => trackPause()}
          />
        ) : (
          <Icon
            name="play"
            style={styles.icon}
            size={34}
            onPress={() => trackPlay()}
          />
        )}
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
