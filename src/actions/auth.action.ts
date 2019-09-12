import {Dispatch} from 'redux';
// @ts-ignore
import {reactLocalStorage} from 'reactjs-localstorage';

import {
  getUserMetaDetailAPI,
  pingAPI,
  signINWithEmailAPI,
  signInWithGoogleAPI,
} from '../helpers/api.helper';
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
  signingInErrorNotification,
  signInSuccessNotification,
} from '../helpers/notification.helper';
import {IGetStateFunction, ISignInOptions} from '../types/common.type';
import {
  COMPANY_PORTAL_HOME_PATH,
  HOME_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from '../constants/paths.constant';

// eslint-disable-next-line no-unused-vars
const fakeRedirect = (url: string): void => {};

const saveToken = (token: IAccessToken): void => {
  reactLocalStorage.setObject(API_TOKENS, {
    tokens: token,
    expires: token.expires,
  });
};

const saveSignIn = (
  user: IUserMeta,
  redirect: any = fakeRedirect,
  signedWith: ISignInOptions = 'U',
) =>
  // eslint-disable-next-line no-unused-vars
  async (dispatch: Dispatch, getState: IGetStateFunction) => {
    dispatch({type: SIGN_IN_SUCCESS, user, signedWith});
    reactLocalStorage.set(SIGNED_IN_TYPE, signedWith);

    switch (user.type) {
      case 'C':
        redirect(COMPANY_PORTAL_HOME_PATH);
        break;
      case 'S':
        redirect(STUDENT_PORTAL_HOME_PATH);
        break;
      default:
    }
    signInSuccessNotification(user.name);
  };

const makeUserSignIn = (
  apiCall: any,
  redirect: any = fakeRedirect,
  signedWith: ISignInOptions = 'U',
) => async (dispatch: Dispatch, getState: IGetStateFunction) => {
  try {
    dispatch({type: SIGN_IN_INITIATED});
    const {user, token}: ISignInToken = await apiCall();
    saveToken(token);
    dispatch({type: SIGN_IN_SUCCESS, user, signedWith});
    saveSignIn(user, redirect, signedWith)(dispatch, getState);
  } catch (e) {
    dispatch({type: SIGNING_IN_FAILED});
    signingInErrorNotification((e.data && e.data.detail) || undefined);
  }
};

export const signInWithGoogleAction = (
  id: string,
  googleToken: string,
  redirect: any = fakeRedirect,
) => async (dispatch: Dispatch, getState: IGetStateFunction) => {
  const apiCall = () => signInWithGoogleAPI(id, googleToken);
  makeUserSignIn(apiCall, redirect, 'G')(dispatch, getState);
};

export const signInWithEmailAction = (
  email: string,
  password: string,
  redirect: any = fakeRedirect,
) => async (dispatch: Dispatch, getState: IGetStateFunction) => {
  const apiCall = () => signINWithEmailAPI(email, password);
  makeUserSignIn(apiCall, redirect, 'E')(dispatch, getState);
};

export const checkUserAction = () => async (dispatch: Dispatch, getState: IGetStateFunction) => {
  try {
    if (reactLocalStorage.get(API_TOKENS)) {
      const user = await getUserMetaDetailAPI();
      saveSignIn(user, fakeRedirect, reactLocalStorage.get(SIGNED_IN_TYPE))(dispatch, getState);
    } else {
      await pingAPI();
    }

    dispatch({type: CONNECTED_WITH_SERVER});
  } catch (e) {
    // pass
    cannotConnectToServerNotification();
  }
};

export const signOutAction = (redirect: any = fakeRedirect) => (dispatch: Dispatch) => {
  reactLocalStorage.remove(API_TOKENS);
  dispatch({type: SIGN_OUT});
  redirect(HOME_PATH);
};
