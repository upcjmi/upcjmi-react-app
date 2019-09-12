import {combineReducers} from 'redux';
import {auth, IAuthState} from './auth.reducer';
import {navigator, INavigatorState} from './navigator.reducer';

export interface IReduxState {
  auth: IAuthState;
  navigator: INavigatorState;
}

export default combineReducers({
  auth,
  navigator,
});
