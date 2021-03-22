import {
  TRACK_PLAY,
  TRACK_PAUSE,
  TRACK_NEXT,
  TRACK_PREVIOUS,
  TRACK_SET,
  ADD_PLAYLIST,
} from '_redux/actions/types';

const initialState = {
  playlist: [],
  play: false,
};

const playerReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case TRACK_PLAY:
      return {
        ...state,
        play: true,
      };
    case TRACK_PAUSE:
      return {
        ...state,
        play: false,
      };
    case TRACK_NEXT:
      return state;
    case TRACK_PREVIOUS:
      return state;
    case TRACK_SET:
      return {
        ...state,
        playlist: state.playlist.push(payload),
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        play: true,
        playlist: payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
