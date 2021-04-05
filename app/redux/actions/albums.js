import {
  LOADING_ALBUMS,
  GET_ALBUMS,
  GET_ALBUMS_BY,
  CLEAR_ALBUMS,
  CLEAR_ALBUMS_BY,
  GET_ALBUM,
  CLEAR_ALBUM,
} from './types';

import firestore from '@react-native-firebase/firestore';
import {toArray} from '_utilities/helpers';

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

// GET BY
export const getAlbumsBy = (prefix, id) => async (dispatch) => {
  dispatch(setAlbumsLoading());
  try {
    const singlesRef = firestore().collection(`${prefix}Albums`).doc(id);
    const doc = await singlesRef.get();
    const data = doc.data();
    const dataArray = toArray(data);
    //console.log(dataArray);

    return dispatch({
      type: GET_ALBUMS_BY,
      payload: dataArray,
    });
  } catch (err) {
    dispatch({
      type: GET_ALBUMS_BY,
      payload: [],
    });
    return console.log(err);
  }
};

// GET ONE
export const getAlbum = (id) => async (dispatch) => {
  dispatch(setAlbumsLoading());
  try {
    const albumRef = firestore().collection('albums').doc(id);
    const albumData = await albumRef.get().data();
    const albumTracks = albumData.tracks.map(
      async (track) =>
        await firestore().collection('singles').doc(track.value).get(),
    );
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

export const clearAlbumsBy = () => {
  return {
    type: CLEAR_ALBUMS_BY,
  };
};

export const clearAlbum = () => {
  return {
    type: CLEAR_ALBUM,
  };
};
