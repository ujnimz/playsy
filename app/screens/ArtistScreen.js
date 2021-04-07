import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

import AppLoading from '_atoms/AppLoading';
import ArtistHero from '_molecules/ArtistHero';
import Row from '_atoms/Row';
import Column from '_atoms/Column';

import {getAlbumsBy, clearAlbumsBy} from '_redux/actions/albums';
import {getSinglesBy, clearSinglesBy} from '_redux/actions/singles';

const ArtistScreen = ({
  route,
  getAlbumsBy,
  clearAlbumsBy,
  getSinglesBy,
  clearSinglesBy,
  albumsState,
  singlesState,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {item} = route.params;
  const {albumsByArray, loading: albumsLoading} = albumsState;
  const {singlesByArray, loading: singlesLoading} = singlesState;

  useEffect(() => {
    getAlbumsBy('artist', item.id);
    getSinglesBy('artist', item.id);
    return () => {
      clearAlbumsBy();
      clearSinglesBy();
    };
  }, []);

  if (albumsLoading || singlesLoading) return <AppLoading />;

  return (
    <ScrollView style={styles.container}>
      <ArtistHero item={item} />
      {singlesByArray.length === 0 ? null : (
        <Column
          data={singlesByArray}
          type="albums"
          navigate="SingleScreen"
          title="Top Singles"
        />
      )}

      {albumsByArray.length === 0 ? null : (
        <Row
          data={albumsByArray}
          type="albums"
          navigate="AlbumScreen"
          title="Latest Albums"
        />
      )}
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

ArtistScreen.propTypes = {
  getAlbumsBy: PropTypes.func.isRequired,
  clearAlbumsBy: PropTypes.func.isRequired,
  getSinglesBy: PropTypes.func.isRequired,
  clearSinglesBy: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  albumsState: state.albumsState,
  singlesState: state.singlesState,
});

export default connect(mapStateToProps, {
  getAlbumsBy,
  clearAlbumsBy,
  getSinglesBy,
  clearSinglesBy,
})(ArtistScreen);
