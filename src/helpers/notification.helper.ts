import {notification} from 'antd';

export const openNotificationWithIcon = (
  type: 'warning' | 'success' | 'error',
  message: string,
  desc: string = '',
): void => {
  // @ts-ignore
  notification[type]({
    message,
    description: desc,
  });
};

export const signInAgainNotification = () =>
  openNotificationWithIcon(
    'warning',
    'Please, SignIn Again',
    'We SignOut user after 24hr of login',
  );
export const errorGettingUserInfoNotification = () =>
  openNotificationWithIcon(
    'error',
    'Please, SignIn Again',
    'We are having error in getting your info',
  );
export const signInSuccessNotification = (name: string) =>
  openNotificationWithIcon('success', `Welcome ${name}`, 'You successfully signed in.');

export const signingInErrorNotification = () =>
  openNotificationWithIcon(
    'error',
    'An unknown error occurred during sign in',
    'If you feel that this is a Bug. Report Bug.',
  );

export const cannotConnectToServerNotification = () =>
  notification.error({
    message: 'Error connecting to server',
    description:
      'Try refreshing page. After refresh if problem persist clear data and cookies. ' +
      'If problem doesnt resolve mail to faisalmanzer11@gmail.com.',
    duration: 5,
  });
