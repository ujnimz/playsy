import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, VirtualizedList} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

import Card from './Card';
import Title from '_atoms/Title';

const Column = ({data, type, title}) => {
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
        }
      : {
          id: data[index].id,
          title: data[index].title,
          image: data[index].image,
          artists: data[index].artists,
        };

  const getItemCount = () => itemCount;
  return (
    <View style={styles.container}>
      <Title title={title} />
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
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

Column.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Column;
