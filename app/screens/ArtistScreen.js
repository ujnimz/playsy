import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

import AppLoading from '_atoms/AppLoading';
import ArtistHero from '_molecules/ArtistHero';
import Column from '_atoms/Column';

import {getAlbumsBy, clearAlbumsBy} from '_redux/actions/albums';

const ArtistScreen = ({route, getAlbumsBy, clearAlbumsBy, albumsState}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {item} = route.params;
  const {albumsByArray, loading} = albumsState;

  useEffect(() => {
    getAlbumsBy('artist', item.id);
    return () => {
      clearAlbumsBy();
    };
  }, []);

  if (loading) return <AppLoading />;

  return (
    <ScrollView style={styles.container}>
      <ArtistHero item={item} />
      <Column data={albumsByArray} type="albums" title="Latest Albums" />
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
};

const mapStateToProps = (state) => ({
  albumsState: state.albumsState,
});

export default connect(mapStateToProps, {getAlbumsBy, clearAlbumsBy})(
  ArtistScreen,
);
