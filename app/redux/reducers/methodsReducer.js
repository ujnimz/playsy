import {OPEN_TRACK_SETTINGS, CLOSE_TRACK_SETTINGS} from '_redux/actions/types';

const initialState = {
  isOpen: 0,
};

const methodsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case OPEN_TRACK_SETTINGS:
      return {
        ...state,
        isOpen: 0,
      };
    case CLOSE_TRACK_SETTINGS:
      return {
        ...state,
        isOpen: 1,
      };
    default:
      return state;
  }
};

export default methodsReducer;
