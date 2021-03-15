import {combineReducers} from 'redux';

import authReducer from './authReducer';
import artistsReducer from './artistsReducer';
import albumsReducer from './albumsReducer';
import singlesReducer from './singlesReducer';

export default combineReducers({
  authState: authReducer,
  artistsState: artistsReducer,
  albumsState: albumsReducer,
  singlesState: singlesReducer,
});
