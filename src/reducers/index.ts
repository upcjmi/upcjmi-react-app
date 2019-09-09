import {combineReducers} from 'redux';
import {auth} from './auth.reducer';
import {navigator} from './navigator.reducer';

export default combineReducers({
  auth,
  navigator,
});
