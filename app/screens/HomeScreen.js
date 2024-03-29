import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

import {getArtists, clearArtists} from '_redux/actions/artists';
import {getAlbums, clearAlbums} from '_redux/actions/albums';

import AppLoading from '_atoms/AppLoading';
import ToolBar from '_molecules/ToolBar';
import Row from '_atoms/Row';

const HomeScreen = ({
  getArtists,
  clearArtists,
  artistsState,
  getAlbums,
  clearAlbums,
  albumsState,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    getArtists();
    getAlbums();
    return () => {
      clearArtists();
      clearAlbums();
    };
  }, []);

  if (artistsState.loading || albumsState.loading) return <AppLoading />;

  return (
    <ScrollView style={styles.container}>
      <ToolBar />
      <Row
        data={artistsState.artistsArray}
        type="artists"
        navigate="ArtistScreen"
        title="Artists"
      />
      <Row
        data={albumsState.albumsArray}
        type="albums"
        navigate="AlbumScreen"
        title="Albums"
      />
    </ScrollView>
  );
};

const getStyles = ({colors, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
      paddingTop: spacing.SAFE_TOP,
    },
  });
};

HomeScreen.propTypes = {
  getArtists: PropTypes.func.isRequired,
  clearArtists: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  clearAlbums: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  artistsState: state.artistsState,
  albumsState: state.albumsState,
});

export default connect(mapStateToProps, {
  getArtists,
  clearArtists,
  getAlbums,
  clearAlbums,
})(HomeScreen);
