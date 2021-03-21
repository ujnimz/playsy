import {combineReducers} from 'redux';

import authReducer from './authReducer';
import artistsReducer from './artistsReducer';
import albumsReducer from './albumsReducer';
import singlesReducer from './singlesReducer';
import playerReducer from './playerReducer';

export default combineReducers({
  authState: authReducer,
  artistsState: artistsReducer,
  albumsState: albumsReducer,
  singlesState: singlesReducer,
  playerState: playerReducer,
});
