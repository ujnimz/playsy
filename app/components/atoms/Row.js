import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, FlatList} from 'react-native';

import {useTheme} from '_theme/ThemeProvider';
import {gapSize} from '_utilities/Dimentions';

import RoundCard from './RoundCard';
import RowTitle from '_atoms/RowTitle';

const Row = ({data}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const renderItem = ({item}) => <RoundCard item={item} />;
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

const getStyles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: gapSize * 2,
    },
  });
};

Row.propTypes = {
  data: PropTypes.array,
  item: PropTypes.object,
};

export default Row;
