import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '_theme/ThemeProvider';

import IconButton from '_atoms/IconButton';

import {addPlaylist} from '_redux/actions/player';

const AlbumButtons = ({data, addPlaylist, playerState}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {play} = playerState;

  const usePlaylist = (newPlaylist) =>
    newPlaylist.map((item) => ({
      id: item.id,
      url: item.uri,
      title: item.title,
      artist: item.artists.map((artist) => artist.label).join(', '),
      genre: item.genres.map((genre) => genre.label).join(', '),
      artwork: item.image,
    }));

  //console.log(usePlaylist(data));

  const onPlay = () => {
    addPlaylist(usePlaylist(data));
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
          icon={play ? 'play' : 'pause'}
          bgColor={theme.colors.SECONDARY}
          iconColor={theme.colors.WHITE}
          text={play ? 'Play' : 'Pause'}
          onPress={onPlay}
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
  playerState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  playerState: state.playerState,
});

export default connect(mapStateToProps, {addPlaylist})(AlbumButtons);
