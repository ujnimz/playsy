import React from 'react';

import AlbumHero from '_components/molecules/AlbumHero';
import AlbumButtons from '_molecules/AlbumButtons';

const AlbumHeader = ({item, tracks}) => {
  return (
    <>
      <AlbumHero item={item} />
      <AlbumButtons tracks={tracks} />
    </>
  );
};

export default AlbumHeader;
