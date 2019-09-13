import {IReducerAction, ISignInOptions} from '../types/common.type';
import {SIGN_IN_INITIATED, SIGN_IN_SUCCESS, SIGN_OUT, SIGNING_IN_FAILED} from '../actions';
import {IUserMeta} from '../types/api.type';

export interface IAuthState {
  isAuthenticated: boolean;
  inProgress: boolean;
  user?: IUserMeta;
  signedWith: ISignInOptions;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  inProgress: false,
  signedWith: 'U',
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
        signedWith: action.signedWith,
        inProgress: false,
      });

    case SIGN_IN_INITIATED:
      return {
        ...initialState,
        inProgress: true,
      };

    case SIGN_OUT:
      return initialState;

    case SIGNING_IN_FAILED:
      return setState({inProgress: false});

    default:
      return state;
  }
};
