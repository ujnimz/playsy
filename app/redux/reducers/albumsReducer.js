import {
  LOADING_ALBUMS,
  GET_ALBUMS,
  CLEAR_ALBUMS,
  GET_ALBUM,
  CLEAR_ALBUM,
} from '../actions/types';

const initialState = {
  albumsArray: [],
  album: {},
  loading: false,
  saving: false,
};

const artistsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOADING_ALBUMS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALBUMS:
      return {
        ...state,
        albumsArray: payload,
        loading: false,
      };
    case CLEAR_ALBUMS:
      return {
        ...state,
        albumsArray: [],
      };
    case GET_ALBUM:
      return {
        ...state,
        album: payload,
        loading: false,
      };
    case CLEAR_ALBUM:
      return {
        ...state,
        album: {},
      };
    default:
      return state;
  }
};

export default artistsReducer;
