import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL,
  AUTH_LOADING,
} from '_redux/actions/types';

const initialState = {
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    case SIGNOUT_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
