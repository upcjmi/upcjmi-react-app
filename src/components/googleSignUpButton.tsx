import React, {FC} from 'react';
import {GoogleLogin} from 'react-google-login';
import {Button} from 'antd';
import {GOOGLE_OAUTH_CLIENT_ID} from 'constants/credentials.constant';
import {IGoogleSignInResponseHacked} from 'types/api.type';
import {errorGettingUserInfoNotification} from 'helpers/notification.helper';

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
  onSignInSuccess: any;
}

const GoogleSignUpButton: FC<IProps> = ({onSignInSuccess}: IProps) => (
  <GoogleLogin
    clientId={GOOGLE_OAUTH_CLIENT_ID || ''}
    render={renderProps => (
      <Button
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
        className='full-width'
        type='primary'
        icon='google'
        size='large'
        style={{backgroundColor: renderProps.disabled ? '#eeeeee' : '#000000'}}>
        Create Account Using Google
      </Button>
    )}
    buttonText='Sign Up'
    // @ts-ignore
    onSuccess={(response: IGoogleSignInResponseHacked) => {
      onSignInSuccess({
        id: response.googleId,
        token: response.tokenId,
        email: response.profileObj.email,
        name: response.profileObj.name,
        type: 'G',
      });
    }}
    onFailure={() => {
      errorGettingUserInfoNotification();
    }}
    cookiePolicy='single_host_origin'
  />
);

export default GoogleSignUpButton;
