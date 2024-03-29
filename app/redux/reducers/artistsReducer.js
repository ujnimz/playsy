import {
  LOADING_ARTISTS,
  GET_ARTISTS,
  CLEAR_ARTISTS,
  GET_ARTIST,
  CLEAR_ARTIST,
  GET_ARTISTS_BY,
  CLEAR_ARTISTS_BY,
} from '../actions/types';

const initialState = {
  artistsArray: [],
  artistsArrayBy: [],
  artist: {},
  loading: false,
  saving: false,
};

const artistsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOADING_ARTISTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ARTISTS:
      return {
        ...state,
        artistsArray: payload,
        loading: false,
      };
    case CLEAR_ARTISTS:
      return {
        ...state,
        artistsArray: [],
      };
    case GET_ARTISTS_BY:
      return {
        ...state,
        artistsArrayBy: payload,
        loading: false,
      };
    case CLEAR_ARTISTS_BY:
      return {
        ...state,
        artistsArrayBy: [],
      };
    case GET_ARTIST:
      return {
        ...state,
        artist: payload,
        loading: false,
      };
    case CLEAR_ARTIST:
      return {
        ...state,
        artist: {},
      };
    default:
      return state;
  }
};

export default artistsReducer;
