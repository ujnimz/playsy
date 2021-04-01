import {
  LOADING_SINGLES,
  GET_SINGLES,
  CLEAR_SINGLES,
  GET_SINGLES_BY,
  CLEAR_SINGLES_BY,
  GET_SINGLE,
  CLEAR_SINGLE,
} from './types';

import firestore from '@react-native-firebase/firestore';

// GET ALL
export const getSingles = () => async (dispatch) => {
  dispatch(setSinglesLoading());
  try {
    const SinglesRef = firestore().collection('singles');
    const snapshot = await SinglesRef.get();
    const data = snapshot.docs.map((doc) => {
      return {id: doc.id, ...doc.data()};
    });
    return dispatch({
      type: GET_SINGLES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLES,
      payload: {},
    });
    return console.log(err);
  }
};

// GET One
export const getSingle = (id) => async (dispatch) => {
  dispatch(setSinglesLoading());
  try {
    const singleRef = firestore().collection('singles').doc(id);
    const snapshot = await singleRef.get();
    return dispatch({
      type: GET_SINGLE,
      payload: snapshot.data(),
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLE,
      payload: {},
    });
    return console.log(err);
  }
};

// GET Singles By
export const getSinglesBy = (prefix, id) => async (dispatch) => {
  dispatch(setSinglesLoading());
  try {
    const singlesRef = firestore().collection(`${prefix}Tracks`).doc(id);
    const doc = await singlesRef.get();
    const data = doc.data();
    return dispatch({
      type: GET_SINGLES_BY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLES_BY,
      payload: {},
    });
    return console.log(err);
  }
};

export const setSinglesLoading = () => {
  return {
    type: LOADING_SINGLES,
  };
};

export const clearSingles = () => {
  return {
    type: CLEAR_SINGLES,
  };
};

export const clearSinglesBy = () => {
  return {
    type: CLEAR_SINGLES_BY,
  };
};

export const clearSingle = () => {
  return {
    type: CLEAR_SINGLE,
  };
};
