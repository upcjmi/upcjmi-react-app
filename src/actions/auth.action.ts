import {Dispatch} from 'redux';
// @ts-ignore
import {reactLocalStorage} from 'reactjs-localstorage';

import {ISignInOptions} from 'types/common.type';
import {HOME_PATH} from 'constants/routes/main.paths.constant';
import {
  cannotConnectToServerNotification,
  openNotificationWithIcon,
  signingInErrorNotification,
  signInSuccessNotification,
  signOutSuccessNotification,
} from 'helpers/notification.helper';
import {
  getUserMetaDetailAPI,
  pingAPI,
  signInWithEmailAPI,
  signInWithGoogleAPI,
} from 'helpers/api/api.helper';
import {API_TOKENS, SIGNED_IN_TYPE} from 'constants/localStorage.constant';

import {IAccessToken, ISignInToken, IUserMeta} from 'types/api.type';
import {
  CONNECTED_WITH_SERVER,
  COULD_NOT_CONNECT_TO_SERVER,
  SIGN_IN_INITIATED,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGNING_IN_FAILED,
} from './index';

const fakeRedirect = (): void => {};

const saveToken = (token: IAccessToken): void => {
  reactLocalStorage.setObject(API_TOKENS, {
    tokens: token,
    expires: token.expires,
  });
};

const saveSignIn = (
  user: IUserMeta,
  signedWith: ISignInOptions = 'U',
  silent: boolean = false,
) => async (dispatch: Dispatch) => {
  dispatch({type: SIGN_IN_SUCCESS, user, signedWith});
  reactLocalStorage.set(SIGNED_IN_TYPE, signedWith);
  if (!silent) signInSuccessNotification(user.name);
};

const makeUserSignIn = (apiCall: any, signedWith: ISignInOptions = 'U') => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch({type: SIGN_IN_INITIATED});
    const {user, token}: ISignInToken = await apiCall();
    saveToken(token);
    dispatch({type: SIGN_IN_SUCCESS, user, signedWith});
    saveSignIn(user, signedWith)(dispatch);
  } catch (e) {
    dispatch({type: SIGNING_IN_FAILED});
    if (e && e.data !== undefined) signingInErrorNotification(e.data.detail);
    else signingInErrorNotification(undefined);
  }
};

export const signInWithEmailAction = (email: string, password: string) => async (
  dispatch: Dispatch,
) => {
  const apiCall = () => signInWithEmailAPI(email, password);
  makeUserSignIn(apiCall, 'E')(dispatch);
};

export const signInWithGoogleAction = (id: string, googleToken: string) => async (
  dispatch: Dispatch,
) => {
  const apiCall = () => signInWithGoogleAPI(id, googleToken);
  makeUserSignIn(apiCall, 'G')(dispatch);
};

export const signIn = (account: any) => (dispatch: Dispatch) => {
  switch (account.type) {
    case 'E':
      signInWithEmailAction(account.email, account.password)(dispatch);
      break;
    case 'G':
      signInWithGoogleAction(account.id, account.token)(dispatch);
      break;
    default:
      openNotificationWithIcon('error', 'Unknown signing');
  }
};

const ping = () => async (dispatch: Dispatch) => {
  try {
    await pingAPI();
    dispatch({type: CONNECTED_WITH_SERVER});
  } catch (e) {
    cannotConnectToServerNotification();
    dispatch({type: COULD_NOT_CONNECT_TO_SERVER});
  }
};

export const checkUserAction = () => async (dispatch: Dispatch) => {
  if (reactLocalStorage.get(API_TOKENS)) {
    try {
      const user = await getUserMetaDetailAPI();
      saveSignIn(user, reactLocalStorage.get(SIGNED_IN_TYPE), true)(dispatch);
      dispatch({type: CONNECTED_WITH_SERVER});
    } catch (e) {
      localStorage.clear();
      ping()(dispatch);
    }
  } else {
    ping()(dispatch);
  }
};

export const signOutAction = (redirect: any = fakeRedirect) => (dispatch: Dispatch) => {
  reactLocalStorage.remove(API_TOKENS);
  dispatch({type: SIGN_OUT});
  signOutSuccessNotification();
  redirect(HOME_PATH);
};
