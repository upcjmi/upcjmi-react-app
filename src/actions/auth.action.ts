import {Dispatch} from 'redux';
// @ts-ignore
import {reactLocalStorage} from 'reactjs-localstorage';

import {
  getUserMetaDetailAPI,
  pingAPI,
  signINWithEmailAPI,
  signInWithGoogleAPI,
} from '../helpers/api/api.helper';
import {
  CONNECTED_WITH_SERVER,
  SIGN_IN_INITIATED,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGNING_IN_FAILED,
} from './index';
import {API_TOKENS, SIGNED_IN_TYPE} from '../constants/localStorage.constant';

import {IAccessToken, ISignInToken, IUserMeta} from '../types/api.type';
import {
  cannotConnectToServerNotification,
  openNotificationWithIcon,
  signingInErrorNotification,
  signInSuccessNotification,
  signOutSuccessNotification,
} from '../helpers/notification.helper';
import {IGetStateFunction, ISignInOptions} from '../types/common.type';
import {HOME_PATH} from '../constants/paths.constant';

// eslint-disable-next-line no-unused-vars
const fakeRedirect = (path: string): void => {};

const saveToken = (token: IAccessToken): void => {
  reactLocalStorage.setObject(API_TOKENS, {
    tokens: token,
    expires: token.expires,
  });
};

const saveSignIn = (user: IUserMeta, signedWith: ISignInOptions = 'U', silent: boolean=false) =>
  // eslint-disable-next-line no-unused-vars
  async (dispatch: Dispatch, getState: IGetStateFunction) => {
    dispatch({type: SIGN_IN_SUCCESS, user, signedWith});
    reactLocalStorage.set(SIGNED_IN_TYPE, signedWith);
    if(!silent)
      signInSuccessNotification(user.name);
  };

const makeUserSignIn = (apiCall: any, signedWith: ISignInOptions = 'U') => async (
  dispatch: Dispatch,
  getState: IGetStateFunction,
) => {
  try {
    dispatch({type: SIGN_IN_INITIATED});
    const {user, token}: ISignInToken = await apiCall();
    saveToken(token);
    dispatch({type: SIGN_IN_SUCCESS, user, signedWith});
    saveSignIn(user, signedWith)(dispatch, getState);
  } catch (e) {
    dispatch({type: SIGNING_IN_FAILED});
    signingInErrorNotification((e.data && e.data.detail) || undefined);
  }
};

export const signInWithEmailAction = (email: string, password: string) => async (
  dispatch: Dispatch,
  getState: IGetStateFunction,
) => {
  const apiCall = () => signINWithEmailAPI(email, password);
  makeUserSignIn(apiCall, 'E')(dispatch, getState);
};

export const signInWithGoogleAction = (id: string, googleToken: string) => async (
  dispatch: Dispatch,
  getState: IGetStateFunction,
) => {
  const apiCall = () => signInWithGoogleAPI(id, googleToken);
  makeUserSignIn(apiCall, 'G')(dispatch, getState);
};

export const signIn = (account: any) => (dispatch: Dispatch, getState: IGetStateFunction) => {
  switch (account.type) {
    case 'E':
      signInWithEmailAction(account.email, account.password)(dispatch, getState);
      break;
    case 'G':
      signInWithGoogleAction(account.id, account.token)(dispatch, getState);
      break;
    default:
      openNotificationWithIcon('error', 'Unkown signing');
  }
};

export const checkUserAction = () => async (dispatch: Dispatch, getState: IGetStateFunction) => {
  try {
    if (reactLocalStorage.get(API_TOKENS)) {
      const user = await getUserMetaDetailAPI();
      saveSignIn(user, reactLocalStorage.get(SIGNED_IN_TYPE), true)(dispatch, getState);
    } else {
      await pingAPI();
    }

    dispatch({type: CONNECTED_WITH_SERVER});
  } catch (e) {
    // pass
    dispatch({type: SIGN_OUT});
    cannotConnectToServerNotification();
  }
};

export const signOutAction = (redirect: any = fakeRedirect) => (dispatch: Dispatch) => {
  reactLocalStorage.remove(API_TOKENS);
  dispatch({type: SIGN_OUT});
  signOutSuccessNotification();
  redirect(HOME_PATH);
};
