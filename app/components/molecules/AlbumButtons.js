import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '_theme/ThemeProvider';

import IconButton from '_atoms/IconButton';

import {addPlaylist, trackPause} from '_redux/actions/player';

const AlbumButtons = ({tracks, addPlaylist, trackPause, playerState}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {play} = playerState;

  const onPlay = () => {
    addPlaylist(tracks);
  };

  const onPause = () => {
    trackPause();
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlPanel}>
        <IconButton
          icon="share-social"
          bgColor={theme.colors.SECONDARY}
          iconColor={theme.colors.PRIMARY}
        />
        <IconButton
          icon={play ? 'pause' : 'play'}
          bgColor={theme.colors.SECONDARY}
          iconColor={theme.colors.WHITE}
          text={play ? 'Pause' : 'Play'}
          onPress={play ? onPause : onPlay}
        />
        <IconButton
          icon="heart-outline"
          bgColor={theme.colors.SECONDARY}
          iconColor={theme.colors.PRIMARY}
        />
      </View>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      padding: spacing.SCALE_12,
    },
    controlPanel: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: spacing.SCALE_18,
      paddingBottom: spacing.SCALE_18,
    },
    shareIcon: {
      color: colors.PRIMARY,
      padding: spacing.SCALE_12,
      backgroundColor: colors.SECONDARY,
      borderRadius: 20,
      overflow: 'hidden',
    },
    playIcon: {
      color: colors.PRIMARY,
      padding: spacing.SCALE_12,
      backgroundColor: colors.SECONDARY,
      borderRadius: 20,
      overflow: 'hidden',
    },
    playText: {
      paddingLeft: 25,
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_14,
      ...typography.FONT_BOLD,
    },
    shadowContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'black',
    },
  });
};

AlbumButtons.propTypes = {
  addPlaylist: PropTypes.func.isRequired,
  trackPause: PropTypes.func.isRequired,
  playerState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  playerState: state.playerState,
});

export default connect(mapStateToProps, {addPlaylist, trackPause})(
  AlbumButtons,
);
