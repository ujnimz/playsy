import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '_theme/ThemeProvider';
import {windowWidth} from '_utilities/Dimentions';

import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

const PlayerControls = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const playbackState = usePlaybackState();

  const trackNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const trackPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const trackPlay = () => {
    TrackPlayer.play();
  };

  const trackPause = () => {
    TrackPlayer.pause();
  };

  return (
    <View style={styles.controls}>
      <Icon
        name="play-skip-back-sharp"
        color={theme.colors.PRIMARY}
        size={28}
        onPress={trackPrevious}
      />
      {playbackState === TrackPlayer.STATE_BUFFERING ? (
        <ActivityIndicator size="large" color={theme.colors.PRIMARY} />
      ) : playbackState === TrackPlayer.STATE_PLAYING ? (
        <Icon
          name="pause-circle-sharp"
          color={theme.colors.PRIMARY}
          size={windowWidth / 6}
          onPress={trackPause}
        />
      ) : (
        <Icon
          name="play-circle-sharp"
          color={theme.colors.PRIMARY}
          size={windowWidth / 6}
          onPress={trackPlay}
        />
      )}

      <Icon
        name="play-skip-forward-sharp"
        color={theme.colors.PRIMARY}
        size={28}
        onPress={trackNext}
      />
    </View>
  );
};

const getStyles = ({spacing}) => {
  return StyleSheet.create({
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: spacing.SCALE_18 * 5,
      marginBottom: spacing.SCALE_16 * 2,
    },
  });
};

export default PlayerControls;
