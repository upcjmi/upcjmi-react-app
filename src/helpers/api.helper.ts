import axios from 'axios';
import {loadOpenUrl, loadSecureUrl} from './apiLoader.helper';
import {IPing, ISignInToken, IUserMeta} from '../types/api.type';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-urlencoded';

const UPing = 'ping/';

const USignInWithEmail = 'auth/sign-in/email/';
const USignInWithGoogle = 'auth/sign-in/google/';

const UUserMetaDetails = 'auth/meta/';

export const pingAPI = (): Promise<IPing> => loadOpenUrl(UPing);

export const signINWithEmailAPI = (username: string, password: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithEmail, {
    method: 'post',
    data: {username, password},
  });
export const signInWithGoogleAPI = (id: string, token: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithGoogle, {
    method: 'post',
    data: {id, token},
  });
export const getUserMetaDetailAPI = (): Promise<IUserMeta> => loadSecureUrl(UUserMetaDetails);
