import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, VirtualizedList} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

import Card from './Card';
import RowTitle from '_atoms/RowTitle';

const Row = ({data, type}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const itemCount = data.length;

  const renderItem = ({item}) => (
    <Card key={item.id} item={item} isArtist={type === 'artists'} />
  );

  const getItem = (data, index) =>
    type === 'artists'
      ? {
          id: data[index].id,
          title: data[index].title,
          image: data[index].image,
          //genres: data[index].genres,
        }
      : {
          id: data[index].id,
          title: data[index].title,
          image: data[index].image,
          artists: data[index].artists,
          year: data[index].year,
        };

  const getItemCount = () => itemCount;

  return (
    <View style={styles.container}>
      <RowTitle title={type} />
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

const getStyles = ({spacing}) => {
  return StyleSheet.create({
    container: {
      marginBottom: spacing.SCALE_8,
    },
    list: {
      margin: spacing.SCALE_8,
      overflow: 'visible',
    },
  });
};

Row.propTypes = {
  data: PropTypes.array.isRequired,
  //item: PropTypes.object.isRequired,
};

export default Row;
