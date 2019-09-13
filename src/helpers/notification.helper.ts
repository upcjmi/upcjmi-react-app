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

export const signOutSuccessNotification = () =>
  openNotificationWithIcon(
    'success',
    'Thank you for giving your time.',
    'You successfully signed out.',
  );

export const signingInErrorNotification = (
  message: string = 'An unknown error occurred during sign in',
) => openNotificationWithIcon('error', message, 'Create a new account.');

export const signUpWithGoogleFailed = () =>
  openNotificationWithIcon('error', 'Sign Up with Google failed', 'Please try again.');

export const cannotConnectToServerNotification = () =>
  notification.error({
    message: 'Error connecting to server',
    description:
      'Try refreshing page. After refresh if problem persist clear data and cookies. ' +
      'If problem doesnt resolve mail to faisalmanzer11@gmail.com.',
    duration: 1000,
    placement: 'bottomRight',
  });

export const userExistsWithThisEmail = (email: string) =>
  openNotificationWithIcon(
    'error',
    `Email ${email} is associated with another account.`,
    'Try signing in or try forgetting password.',
  );
