import {combineReducers} from 'redux';
import {auth, IAuthState} from './auth.reducer';
import {navigator, INavigatorState} from './navigator.reducer';
import {student, IStudentState} from './student.reducer';
import {company, ICompanyState} from './company.reducer';

export interface IReduxState {
  auth: IAuthState;
  navigator: INavigatorState;
  student: IStudentState;
  company: ICompanyState;
}

export default combineReducers({
  auth,
  navigator,
  student,
  company,
});
