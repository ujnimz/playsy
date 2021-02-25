import React from 'react';

import {StyleSheet, View, FlatList} from 'react-native';

import {useTheme} from '../../../utilities/ThemeProvider';
import {gapSize} from '../../../utilities/Dimentions';

import SquareThumb from './SquareThumb';
import ThumbTitle from './ThumbTitle';

const SquareThumbRow = ({data}) => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  const renderItem = ({item}) => <SquareThumb item={item} />;
  return (
    <View style={styles.container}>
      <ThumbTitle />
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      marginBottom: gapSize * 2,
    },
  });
};

export default SquareThumbRow;
