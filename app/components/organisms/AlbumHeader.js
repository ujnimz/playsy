import React from 'react';

import AlbumHero from '_components/molecules/AlbumHero';
import AlbumButtons from '_molecules/AlbumButtons';

const AlbumHeader = ({item}) => {
  return (
    <>
      <AlbumHero item={item} />
      <AlbumButtons />
    </>
  );
};

export default AlbumHeader;
