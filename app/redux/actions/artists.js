import {
  LOADING_ARTISTS,
  GET_ARTISTS,
  CLEAR_ARTISTS,
  GET_ARTIST,
  CLEAR_ARTIST,
  GET_ARTISTS_BY,
  CLEAR_ARTISTS_BY,
} from './types';

import firestore from '@react-native-firebase/firestore';

// GET All
export const getArtists = () => async (dispatch) => {
  dispatch(setArtistsLoading());
  try {
    const artistsRef = firestore().collection('artists');
    const snapshot = await artistsRef.get();
    const data = snapshot.docs.map((doc) => {
      return {id: doc.id, ...doc.data()};
    });
    return dispatch({
      type: GET_ARTISTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ARTISTS,
      payload: {},
    });
    return console.log(err);
  }
};

// GET One
export const getArtist = (id) => async (dispatch) => {
  dispatch(setArtistsLoading());
  try {
    const artistRef = firestore().collection('artists').doc(id);
    const snapshot = await artistRef.get();
    return dispatch({
      type: GET_ARTIST,
      payload: snapshot.data(),
    });
  } catch (err) {
    dispatch({
      type: GET_ARTIST,
      payload: {},
    });
    return console.log(err);
  }
};

// GET Artists By Ids
export const getArtistsBy = (id) => async (dispatch) => {
  dispatch(setArtistsLoading());
  try {
    const singleRef = firestore().collection('artists');
    const snapshot = await singleRef
      .where(firestore.FieldPath.documentId(), 'in', id)
      .get();
    const data = snapshot.docs.map((doc) => {
      return {id: doc.id, ...doc.data()};
    });
    return dispatch({
      type: GET_ARTISTS_BY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ARTISTS_BY,
      payload: {},
    });
    return console.log(err);
  }
};

export const setArtistsLoading = () => {
  return {
    type: LOADING_ARTISTS,
  };
};

export const setArtistsSaving = () => {
  return {
    type: SAVING_ARTISTS,
  };
};

export const clearArtists = () => {
  return {
    type: CLEAR_ARTISTS,
  };
};

export const clearArtistsBy = () => {
  return {
    type: CLEAR_ARTISTS_BY,
  };
};

export const clearArtist = () => {
  return {
    type: CLEAR_ARTIST,
  };
};
