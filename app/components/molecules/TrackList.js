import React from 'react';
import {FlatList} from 'react-native';

import TrackRow from '_atoms/TrackRow';

const TrackList = ({data}) => {
  const renderItem = ({item}) => <TrackRow key={item.id} item={item} />;

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default TrackList;
