import axios from 'axios';
// @ts-ignore
import {reactLocalStorage} from 'reactjs-localstorage';

import {API_TOKENS} from 'constants/localStorage.constant';
import {IAccessToken} from 'types/api.type';
import {IObject} from 'types/common.type';
import {API_BASE_URL} from 'constants/credentials.constant';
import {
  signInAgainNotification,
  errorGettingUserInfoNotification,
} from 'helpers/notification.helper';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

const REFRESH_ACCESS_TOKEN = 'auth/token/refresh/';

export const loadOpenUrl = async (url: string, config: IObject = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios(url, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });
};

const getAccessToken = () => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const data = reactLocalStorage.getObject(API_TOKENS);

    if (!data) return reject('No User found');

    let accessToken = '';
    const expires = new Date(data.expires * 1000);
    const currentTime = new Date();

    if (expires > currentTime) {
      accessToken = data.tokens.access;
    } else {
      try {
        const newToken: IAccessToken = await loadOpenUrl(REFRESH_ACCESS_TOKEN, {
          method: 'post',
          data: {
            refresh: data.tokens.refresh,
          },
        });
        accessToken = newToken.access;

        reactLocalStorage.setObject(API_TOKENS, {
          tokens: {
            ...data.tokens,
            access: accessToken,
          },
          expires: newToken.expires,
        });
      } catch (e) {
        try {
          if (e.data.code === 'token_not_valid') signInAgainNotification();
          else errorGettingUserInfoNotification();
        } catch (er) {
          // pass
        }

        return reject('Error refreshing token');
      }
    }

    return resolve(accessToken);
  });
};

export const loadSecureUrl = (url: string, config: IObject = {}): Promise<any> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const data = await loadOpenUrl(url, {
        ...config,
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      });
      return resolve(data);
    } catch (e) {
      return reject(e);
    }
  });
};
