import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import {useTheme} from '_theme/ThemeProvider';

const PlayerProgressBar = () => {
  const [bar, setBar] = useState({duration: 0, position: 0});
  const progress = useTrackPlayerProgress();
  const playbackState = usePlaybackState();

  useEffect(() => {
    setBar({
      ...bar,
      duration: progress.duration,
      position: progress.position,
    });
    return () => {
      setBar({duration: 0, position: 0});
    };
  }, [progress, playbackState]);

  const theme = useTheme();
  const styles = getStyles(theme);

  const formatTime = (time) => {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = '';
    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  };

  return (
    <>
      <View style={styles.progressTime}>
        <Text style={styles.progressTimeText}>
          {playbackState === TrackPlayer.STATE_BUFFERING
            ? '..:..'
            : formatTime(bar.position)}
        </Text>
        <Text style={styles.progressTimeText}>
          {playbackState === TrackPlayer.STATE_BUFFERING
            ? '..:..'
            : formatTime(bar.duration)}
        </Text>
      </View>
      <View style={styles.progress}>
        <View
          style={{
            flex: bar.position,
            backgroundColor: theme.colors.WHITE,
          }}
        />
        <View
          style={{
            flex: bar.duration - bar.position,
            backgroundColor: theme.colors.PLACEHOLDER,
          }}
        />
      </View>
    </>
  );
};

const getStyles = ({typography, colors, spacing}) => {
  return StyleSheet.create({
    progress: {
      height: 1,
      flexDirection: 'row',
    },
    progressTime: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    progressTimeText: {
      fontSize: typography.FONT_SIZE_12,
      color: colors.PLACEHOLDER,
    },
    progressBar: {
      height: 1,
      backgroundColor: colors.PLACEHOLDER,
      marginBottom: spacing.SCALE_16,
    },
  });
};

export default PlayerProgressBar;
