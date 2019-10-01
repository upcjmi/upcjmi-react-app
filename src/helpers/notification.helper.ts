import {notification} from 'antd';
import reactHtmlParser from 'react-html-parser';

export const openNotificationWithIcon = (
  type: 'warning' | 'success' | 'error',
  message: string,
  desc: string = '',
): void => {
  // @ts-ignore
  notification[type]({
    message,
    description: desc,
    top: 70
  });
};
export const htmlNotification = (
  type: 'warning' | 'success' | 'error',
  message: string,
  desc: string = '',
): void => {
  openNotificationWithIcon(
    type,
    message,
    // @ts-ignore
    reactHtmlParser(desc.replace(/(?:\r\n|\r|\n)/g, '<br />')),
  );
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
      'If problem doesn't resolve mail to faisalmanzer11@gmail.com.',
    duration: 1000,
    placement: 'bottomRight',
  });

export const userExistsWithThisEmail = (email: string) =>
  openNotificationWithIcon(
    'error',
    `Email ${email} is associated with another account.`,
    'Try signing in or try forgetting password.',
  );

export const signUpSuccessfullNotification = () =>
  openNotificationWithIcon('success', 'Account created you successfully');

export const signUpFailedNotification = (detail: string) =>
  htmlNotification('error', 'Failed to create account', detail);

export const apiErrorNotification = (
  type: 'warning' | 'success' | 'error',
  message: string,
  error: any,
): void => {
  if(error.data !== undefined){
    const errorData = error.data.detail;
    if(typeof errorData === 'string')
      openNotificationWithIcon(type, message, errorData);
    else{
      const errorDetail = Object.keys(errorData).map((errorO: any) => {
        return errorO.map((errorOO: any) => {
          return `${errorOO}\n`
        })
      });

      htmlNotification(type, message, `The following error occurred\n${errorDetail}`);
    }
  } else {
    openNotificationWithIcon(type, message, 'An unknown error occurred')
  }
};
