import React from 'react';

import AlbumHero from '_components/molecules/AlbumHero';
import AlbumButtons from '_molecules/AlbumButtons';

const AlbumHeader = ({item, data}) => {
  return (
    <>
      <AlbumHero item={item} />
      <AlbumButtons data={data} />
    </>
  );
};

export default AlbumHeader;
