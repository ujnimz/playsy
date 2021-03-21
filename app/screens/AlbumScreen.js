import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, VirtualizedList, View} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import {getAlbum, clearAlbum} from '_redux/actions/albums';

import {useTheme} from '_theme/ThemeProvider';

import AppLoading from '_atoms/AppLoading';
import TrackRow from '_atoms/TrackRow';
import TrackSettings from '_organisms/TrackSettings';
import AlbumHeader from '_components/organisms/AlbumHeader';

const AnimatedView = Animated.View;

const AlbumScreen = ({route, getAlbum, clearAlbum, albumsState}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {item} = route.params;
  let fall = new Animated.Value(1);

  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    getAlbum(item.id);
    return () => {
      clearAlbum();
    };
  }, []);

  const sheetRef = React.useRef(null);

  const openBottomSheet = (item) => {
    setCurrentItem(item);
    sheetRef.current.snapTo(0);
  };

  const renderContent = () => <TrackSettings currentItem={currentItem} />;

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    });

    return (
      <AnimatedView
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    );
  };

  const data = albumsState.albumsArray;

  console.log(albumsState.album);

  const renderItem = ({item}) => (
    <TrackRow
      key={item.id}
      item={item}
      openBottomSheet={() => openBottomSheet(item)}
    />
  );

  const getItem = (data, index) => ({
    id: data[index].id,
    title: data[index].title,
    image: data[index].image,
    artists: data[index].artists,
    genres: data[index].genres,
    audio: data[index].uri,
  });

  const getItemCount = (data) => data.length;

  if (albumsState.loading) return <AppLoading />;

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItemCount={getItemCount}
        getItem={getItem}
        ListHeaderComponent={() => <AlbumHeader item={item} data={data} />}
        showsHorizontalScrollIndicator={false}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[380, 0, 0]}
        initialSnap={1}
        borderRadius={20}
        callbackNode={fall}
        renderContent={renderContent}
      />
      {renderShadow()}
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
    },
  });
};

AlbumScreen.propTypes = {
  getAlbum: PropTypes.func.isRequired,
  clearAlbum: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  albumsState: state.albumsState,
});

export default connect(mapStateToProps, {getAlbum, clearAlbum})(AlbumScreen);
