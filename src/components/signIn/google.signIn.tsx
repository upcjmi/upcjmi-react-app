import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

import {GOOGLE_OAUTH_CLIENT_ID} from '../../constants/credentials.constant';
import {IReduxState} from '../../reducers';
import {signInWithGoogleAction} from '../../actions/auth.action';
import {IAuthState} from '../../reducers/auth.reducer';
import {IGoogleSignInResponseHacked, IUserMeta} from '../../types/api.type';
import {SIGN_IN_INITIATED, SIGN_OUT, SIGNING_IN_FAILED} from '../../actions';

// eslint-disable-next-line no-undef
interface IStateProps extends Partial<IAuthState> {
  user: IUserMeta | undefined;
}

interface IDispatchProps {
  signIn(id: string, token: string): any;

  startSignInProcess(): any;

  signInFailed(): any;

  signOut(): any;
}

interface IProps extends IStateProps, IDispatchProps {}

const GoogleSignIn: FC<IProps> = (props: IProps) => {
  const {isAuthenticated, inProgress, user} = props;

  if (isAuthenticated && user)
    return (
      <GoogleLogout
        clientId={GOOGLE_OAUTH_CLIENT_ID || ''}
        onLogoutSuccess={() => {
          props.signOut();
        }}
        render={renderProps => (
          <Button onClick={renderProps.onClick} icon="logout" type="primary">
            Logout
          </Button>
        )}>
        {user.email}
      </GoogleLogout>
    );

  return (
    <GoogleLogin
      clientId={GOOGLE_OAUTH_CLIENT_ID || ''}
      render={renderProps => (
        <Button
          onClick={() => {
            props.startSignInProcess();
            renderProps.onClick();
          }}
          disabled={renderProps.disabled}
          // type="primary"
          icon={inProgress ? 'loading' : 'google'}>
          Sign In With Google
        </Button>
      )}
      buttonText="Login"
      // @ts-ignore
      onSuccess={(response: IGoogleSignInResponseHacked) => {
        props.signIn(response.googleId, response.tokenId);
      }}
      onFailure={() => {
        props.signInFailed();
      }}
      cookiePolicy="single_host_origin"
    />
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  inProgress: state.auth.inProgress,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  signIn: (id: string, token: string) => dispatch(signInWithGoogleAction(id, token)),
  startSignInProcess: () => dispatch({type: SIGN_IN_INITIATED}),
  signInFailed: () => dispatch({type: SIGNING_IN_FAILED}),
  signOut: () => dispatch({type: SIGN_OUT}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleSignIn);
