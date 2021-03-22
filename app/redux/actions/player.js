import {
  TRACK_PLAY,
  TRACK_PAUSE,
  TRACK_NEXT,
  TRACK_PREVIOUS,
  TRACK_ADD,
  TRACK_SET,
  ADD_PLAYLIST,
} from './types';
import TrackPlayer from 'react-native-track-player';

// Play Track
export const trackPlay = () => {
  TrackPlayer.play();
  return {
    type: TRACK_PLAY,
  };
};

// Pause Track
export const trackPause = () => (dispatch) => {
  TrackPlayer.pause();
  return dispatch({
    type: TRACK_PAUSE,
  });
};

// Next Track
export const trackNext = () => async (dispatch) => {
  await TrackPlayer.skipToNext();
  return dispatch({
    type: TRACK_NEXT,
  });
};

// Next Track
export const trackPrevious = () => async (dispatch) => {
  await TrackPlayer.skipToPrevious();
  return dispatch({
    type: TRACK_PREVIOUS,
  });
};

// Add Track
export const trackAdd = (track) => async (dispatch) => {
  return dispatch({
    type: TRACK_ADD,
    payload: track,
  });
};

// Add Track
export const addPlaylist = (playlist) => async (dispatch) => {
  console.log(playlist);
  TrackPlayer.reset();
  await TrackPlayer.add(playlist);
  TrackPlayer.play();
  return dispatch({
    type: ADD_PLAYLIST,
    payload: playlist,
  });
};
