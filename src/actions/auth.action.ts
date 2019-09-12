import {Dispatch} from 'redux';
// @ts-ignore
import {reactLocalStorage} from 'reactjs-localstorage';

import {getUserMetaDetailAPI, pingAPI, signInWithGoogleAPI} from '../helpers/api.helper';
import {
  CONNECTED_WITH_SERVER,
  SIGN_IN_INITIATED,
  SIGN_IN_SUCCESS,
  SIGNING_IN_FAILED,
} from './index';
import {API_TOKENS} from '../constants/localStorage.constant';

import {ISignInToken, IUserMeta} from '../types/api.type';
import {
  cannotConnectToServerNotification,
  signInAgainNotification,
  signingInErrorNotification,
  signInSuccessNotification,
} from '../helpers/notification.helper';
import {IGetStateFunction} from '../types/common.type';

// eslint-disable-next-line no-unused-vars
const makeUserSignIn = (user: IUserMeta) => (dispatch: Dispatch, getState: IGetStateFunction) => {
  dispatch({type: SIGN_IN_SUCCESS, user});
  signInSuccessNotification(user.name);
};

export const signInWithGoogleAction = (id: string, googleToken: string) => async (
  dispatch: Dispatch,
  getState: IGetStateFunction,
) => {
  try {
    dispatch({type: SIGN_IN_INITIATED});
    const {token, user}: ISignInToken = await signInWithGoogleAPI(id, googleToken);
    reactLocalStorage.setObject(API_TOKENS, {
      tokens: token,
      expires: token.expires,
    });
    makeUserSignIn(user)(dispatch, getState);
  } catch (e) {
    dispatch({type: SIGNING_IN_FAILED});
    signingInErrorNotification();
  }
};

export const checkUserAction = () => async (dispatch: Dispatch, getState: IGetStateFunction) => {
  try {
    if (reactLocalStorage.get(API_TOKENS)) {
      const user = await getUserMetaDetailAPI();
      makeUserSignIn(user)(dispatch, getState);
    } else {
      await pingAPI();
      signInAgainNotification();
    }

    dispatch({type: CONNECTED_WITH_SERVER});
  } catch (e) {
    // pass
    cannotConnectToServerNotification();
  }
};
