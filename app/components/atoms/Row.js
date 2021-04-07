import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, VirtualizedList} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';
import {toArray} from '_utilities/helpers';

import Card from './Card';
import Title from '_components/atoms/Title';

const Row = ({data, type, navigate, title}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const itemCount = data.length;

  const renderItem = ({item}) => (
    <Card
      key={item.id}
      item={item}
      navigate={navigate}
      isCenter={type === 'artists'}
    />
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
          meta1: toArray(data[index].artists).map((artist) => artist.title)[0],
          meta2: data[index].year,
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
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Row;
