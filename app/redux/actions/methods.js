import {OPEN_TRACK_SETTINGS, CLOSE_TRACK_SETTINGS} from './types';

// OPEN TRACK SETTINGS
export const openTrackSettings = () => (dispatch) => {
  return dispatch({
    type: OPEN_TRACK_SETTINGS,
  });
};

// CLOSE TRACK SETTINGS
export const closeTrackSettings = () => (dispatch) => {
  return dispatch({
    type: CLOSE_TRACK_SETTINGS,
  });
};
