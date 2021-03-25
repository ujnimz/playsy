import {
  LOADING_ALBUMS,
  GET_ALBUMS,
  CLEAR_ALBUMS,
  GET_ALBUM,
  CLEAR_ALBUM,
} from './types';

import firestore from '@react-native-firebase/firestore';

// GET ALL
export const getAlbums = () => async (dispatch) => {
  dispatch(setAlbumsLoading());
  try {
    const albumsRef = firestore().collection('albums');
    const snapshot = await albumsRef.get();
    const data = snapshot.docs.map((doc) => {
      return {id: doc.id, ...doc.data()};
    });
    return dispatch({
      type: GET_ALBUMS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALBUMS,
      payload: {},
    });
    return console.log(err);
  }
};

// GET ALL
export const getAlbum = (id) => async (dispatch) => {
  dispatch(setAlbumsLoading());
  try {
    const albumRef = firestore().collection('albums').doc(id);
    const albumData = await albumRef.get().data();
    const albumTracks = albumData.tracks.map(
      async (track) =>
        await firestore().collection('singles').doc(track.value).get(),
    );
    console.log(albumTracks);
    const album = {...albumData, tracks: albumTracks};
    return dispatch({
      type: GET_ALBUM,
      payload: album,
    });
  } catch (err) {
    dispatch({
      type: GET_ALBUM,
      payload: {},
    });
    return console.log(err);
  }
};

export const setAlbumsLoading = () => {
  return {
    type: LOADING_ALBUMS,
  };
};

export const setAlbumsSaving = () => {
  return {
    type: SAVING_ARTISTS,
  };
};

export const clearAlbums = () => {
  return {
    type: CLEAR_ALBUMS,
  };
};

export const clearAlbum = () => {
  return {
    type: CLEAR_ALBUM,
  };
};
