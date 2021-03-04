import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, FlatList} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';

import Card from './Card';
import RowTitle from '_atoms/RowTitle';

const Row = ({data}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const renderItem = ({item}) => <Card item={item} isRound={true} />;
  return (
    <View style={styles.container}>
      <RowTitle />
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

const getStyles = ({spacing}) => {
  return StyleSheet.create({
    container: {
      marginBottom: spacing.SCALE_16 * 2,
    },
  });
};

Row.propTypes = {
  data: PropTypes.array,
  item: PropTypes.object,
};

export default Row;
