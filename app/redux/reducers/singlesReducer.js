import {
  LOADING_SINGLES,
  GET_SINGLES,
  CLEAR_SINGLES,
  GET_SINGLES_BY,
  CLEAR_SINGLES_BY,
  GET_SINGLE,
  CLEAR_SINGLE,
} from '../actions/types';

const initialState = {
  singlesArray: [],
  singlesByArray: [],
  single: {},
  loading: false,
  saving: false,
};

const singlesReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOADING_SINGLES:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLES:
      return {
        ...state,
        singlesArray: payload,
        loading: false,
      };
    case CLEAR_SINGLES:
      return {
        ...state,
        singlesArray: [],
      };
    case GET_SINGLES_BY:
      return {
        ...state,
        singlesByArray: payload,
        loading: false,
      };
    case CLEAR_SINGLES_BY:
      return {
        ...state,
        singlesByArray: [],
      };
    case GET_SINGLE:
      return {
        ...state,
        single: payload,
        loading: false,
      };
    case CLEAR_SINGLE:
      return {
        ...state,
        single: {},
      };
    default:
      return state;
  }
};

export default singlesReducer;
