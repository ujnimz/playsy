import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '../../utilities/ThemeProvider';
import {gapSize} from '../../utilities/Dimentions';

import MiniPlayer from './MiniPlayer';
import FullPlayer from './FullPlayer';

const PlayerScreen = ({onCloseBottomSheet}) => {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <MiniPlayer />
      <FullPlayer onCloseBottomSheet={onCloseBottomSheet} />
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flex: 1,
    },
  });
};

export default PlayerScreen;
