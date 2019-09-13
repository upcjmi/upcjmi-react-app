import axios from 'axios';
import {loadOpenUrl, loadSecureUrl} from './loader.api.helper';
import {IPing, ISignInToken, IUserExists, IUserMeta} from '../../types/api.type';
import {BASE_URL} from '../../constants/credentials.constant';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-urlencoded';

const UPing = 'ping/';

const USignInWithEmail = 'auth/sign-in/email/';
const USignInWithGoogle = 'auth/sign-in/google/';

const UUserMetaDetails = 'auth/user/meta/';
const UUserExits = 'auth/user/exists/';

export const pingAPI = (): Promise<IPing> => loadOpenUrl(UPing);

export const signINWithEmailAPI = (email: string, password: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithEmail, {
    method: 'post',
    data: {email, password},
  });
export const signInWithGoogleAPI = (id: string, token: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithGoogle, {
    method: 'post',
    data: {id, token},
  });
export const getUserMetaDetailAPI = (): Promise<IUserMeta> => loadSecureUrl(UUserMetaDetails);
export const doesUserExistsAPI = (email: string): Promise<IUserExists> =>
  loadOpenUrl(UUserExits, {
    params: {
      email,
    },
  });
