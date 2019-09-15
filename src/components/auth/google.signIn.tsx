import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {GoogleLogin} from 'react-google-login';

import {GOOGLE_OAUTH_CLIENT_ID} from '../../constants/credentials.constant';
import {IReduxState} from '../../reducers';
import {signInWithGoogleAction} from '../../actions/auth.action';
import {IAuthState} from '../../reducers/auth.reducer';
import {IGoogleSignInResponseHacked} from '../../types/api.type';
import {SIGN_IN_INITIATED, SIGNING_IN_FAILED} from '../../actions';

// eslint-disable-next-line no-undef
interface IStateProps extends Partial<IAuthState> {
  inProgress: boolean;
}

interface IDispatchProps {
  signIn(id: string, token: string): any;
  startSignInProcess(): any;
  signInFailed(): any;
}

interface IProps extends IStateProps, IDispatchProps {}

const GoogleSignIn: FC<IProps> = (props: IProps) => {
  const {inProgress} = props;

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
          type='primary'
          icon={inProgress ? 'loading' : 'google'}
          style={{width: '100%', backgroundColor: '#000000'}}
          size='large'
        >
          Sign In With Google
        </Button>
      )}
      buttonText='Login'
      // @ts-ignore
      onSuccess={(response: IGoogleSignInResponseHacked) => {
        props.signIn(response.googleId, response.tokenId);
      }}
      onFailure={() => {
        props.signInFailed();
      }}
      cookiePolicy='single_host_origin'
    />
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  inProgress: state.auth.inProgress,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  signIn: (id, token) => dispatch(signInWithGoogleAction(id, token)),
  startSignInProcess: () => dispatch({type: SIGN_IN_INITIATED}),
  signInFailed: () => dispatch({type: SIGNING_IN_FAILED}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleSignIn);
