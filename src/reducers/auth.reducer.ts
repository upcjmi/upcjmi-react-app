// @ts-ignore
import {reactLocalStorage} from 'reactjs-localstorage';

import {IReducerAction} from '../types/common.type';
import {SIGN_IN_INITIATED, SIGN_IN_SUCCESS, SIGN_OUT, SIGNING_IN_FAILED} from '../actions';
import {IUserMeta} from '../types/api.type';
import {API_TOKENS} from '../constants/localStorage.constant';

export interface IAuthState {
  isAuthenticated: boolean;
  inProgress: boolean;
  user?: IUserMeta;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  inProgress: false,
};

export const auth = (state: IAuthState = initialState, action: IReducerAction) => {
  // eslint-disable-next-line no-undef
  const setState = (override: Partial<IAuthState>): IAuthState => ({
    ...state,
    ...override,
  });

  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return setState({
        isAuthenticated: true,
        user: action.user,
      });

    case SIGN_IN_INITIATED:
      return {
        ...initialState,
        inProgress: true,
      };

    case SIGN_OUT:
      reactLocalStorage.remove(API_TOKENS);
      return initialState;

    case SIGNING_IN_FAILED:
      return setState({inProgress: false});

    default:
      return state;
  }
};
