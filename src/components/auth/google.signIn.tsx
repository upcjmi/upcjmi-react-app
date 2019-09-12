import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {withRouter} from 'react-router-dom';

import {GOOGLE_OAUTH_CLIENT_ID} from '../../constants/credentials.constant';
import {IReduxState} from '../../reducers';
import {signInWithGoogleAction, signOutAction} from '../../actions/auth.action';
import {IAuthState} from '../../reducers/auth.reducer';
import {IGoogleSignInResponseHacked, IUserMeta} from '../../types/api.type';
import {SIGN_IN_INITIATED, SIGNING_IN_FAILED} from '../../actions';

// eslint-disable-next-line no-undef
interface IStateProps extends Partial<IAuthState> {
  user: IUserMeta | undefined;
}

interface IDispatchProps {
  signIn(id: string, token: string, redirect: any): any;
  startSignInProcess(): any;
  signInFailed(): any;
  signOut(redirect: any): any;
}

interface IProps extends IStateProps, IDispatchProps {
  history: any;
}

const GoogleSignIn: FC<IProps> = (props: IProps) => {
  const {isAuthenticated, inProgress, user, history} = props;

  if (isAuthenticated && user)
    return (
      <GoogleLogout
        clientId={GOOGLE_OAUTH_CLIENT_ID || ''}
        onLogoutSuccess={() => {
          props.signOut(history.push);
        }}
        render={renderProps => (
          <Button onClick={renderProps.onClick} icon="logout" type="primary">
            Sign Out
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
          icon={inProgress ? 'loading' : 'google'}
          style={{width: '100%'}}>
          Sign In With Google
        </Button>
      )}
      buttonText="Login"
      // @ts-ignore
      onSuccess={(response: IGoogleSignInResponseHacked) => {
        props.signIn(response.googleId, response.tokenId, history.push);
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
  signIn: (id, token, redirect) => dispatch(signInWithGoogleAction(id, token, redirect)),
  startSignInProcess: () => dispatch({type: SIGN_IN_INITIATED}),
  signInFailed: () => dispatch({type: SIGNING_IN_FAILED}),
  signOut: redirect => dispatch(signOutAction(redirect)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // @ts-ignore
)(withRouter(GoogleSignIn));
