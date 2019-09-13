import React, {FC} from 'react';
import {connect} from 'react-redux';
import {GoogleLogin} from 'react-google-login';
import {Button} from 'antd';
import {GOOGLE_OAUTH_CLIENT_ID} from '../constants/credentials.constant';
import {IGoogleSignInResponseHacked} from '../types/api.type';

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
        type="primary"
        icon="google"
        size="large"
        style={{width: '100%', backgroundColor: '#000000'}}>
        Create Account Using Google
      </Button>
    )}
    buttonText="Sign Up"
    // @ts-ignore
    onSuccess={(response: IGoogleSignInResponseHacked) => {
      onSignInSuccess({
        id: response.googleId,
        token: response.tokenId,
        email: response.profileObj.email,
        type: 'G',
      });
    }}
    onFailure={response => {}}
    cookiePolicy="single_host_origin"
  />
);

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any): IStateProps => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any): IDispatchProps => ({});

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleSignUpButton);
