import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, VirtualizedList, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import {useTheme} from '_theme/ThemeProvider';
import {toArray} from '_utilities/helpers';

import {getSinglesBy, clearSinglesBy} from '_redux/actions/singles';

import AppLoading from '_atoms/AppLoading';
import TrackRow from '_atoms/TrackRow';
import TrackSettings from '_organisms/TrackSettings';
import AlbumHeader from '_components/organisms/AlbumHeader';

const AnimatedView = Animated.View;

const AlbumScreen = ({route, getSinglesBy, clearSinglesBy, singlesState}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {item} = route.params;

  let fall = new Animated.Value(1);
  const sheetRef = useRef(null);

  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    getSinglesBy('album', item.id);
    return () => {
      clearSinglesBy();
    };
  }, []);

  const {singlesByArray, loading} = singlesState;

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

  const renderItem = ({item}) => (
    <TrackRow
      key={item.id}
      item={item}
      openBottomSheet={() => openBottomSheet(item)}
    />
  );

  const renderNoTracksMessage = () => (
    <View>
      <Text>You have no music tracks in your album.</Text>
    </View>
  );

  const getItem = (data, index) => ({
    id: data[index].id,
    title: data[index].title,
    image: item.image,
    artists: item.meta1,
    audio: data[index].uri,
  });

  const getItemCount = (data) => data.length;

  const makeTrackList = (tracks) =>
    tracks.map((track) => ({
      id: track.id,
      url: track.uri,
      title: track.title,
      artist: item.meta1,
      artwork: item.image,
    }));

  if (loading) return <AppLoading />;

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={singlesByArray}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItemCount={getItemCount}
        getItem={getItem}
        ListHeaderComponent={() => (
          <AlbumHeader item={item} tracks={makeTrackList(singlesByArray)} />
        )}
        ListEmptyComponent={renderNoTracksMessage()}
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

const getStyles = ({colors}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
    },
  });
};

AlbumScreen.propTypes = {
  getSinglesBy: PropTypes.func.isRequired,
  clearSinglesBy: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  singlesState: state.singlesState,
});

export default connect(mapStateToProps, {
  getSinglesBy,
  clearSinglesBy,
})(AlbumScreen);
