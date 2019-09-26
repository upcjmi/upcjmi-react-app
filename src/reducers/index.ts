import {combineReducers} from 'redux';
import {auth, IAuthState} from './auth.reducer';
import {navigator, INavigatorState} from './navigator.reducer';
import {student, IStudentState} from './student.reducer';

export interface IReduxState {
  auth: IAuthState;
  navigator: INavigatorState;
  student: IStudentState;
}

export default combineReducers({
  auth,
  navigator,
  student
});
