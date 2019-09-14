import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {GoogleLogout} from 'react-google-login';
import {withRouter} from 'react-router-dom';

import {GOOGLE_OAUTH_CLIENT_ID} from '../../constants/credentials.constant';
import {IReduxState} from '../../reducers';
import {signOutAction} from '../../actions/auth.action';

// eslint-disable-next-line no-undef
interface IStateProps {}

interface IDispatchProps {
  signOut(redirect: any): any;
}

interface IProps extends IStateProps, IDispatchProps {
  history: any;
  redirect: boolean;
}

const GoogleSignOut: FC<IProps> = (props: IProps) => {
  const {history, redirect} = props;

  return (
    <GoogleLogout
      clientId={GOOGLE_OAUTH_CLIENT_ID || ''}
      onLogoutSuccess={() => {}}
      render={renderProps => (
        <Button
          onClick={() => {
            const redirectFunction = redirect ? history.push : () => {};
            props.signOut(redirectFunction);
            renderProps.onClick();
          }}
          icon='logout'
          type='link'>
          Sign Out
        </Button>
      )}
    />
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  signOut: redirect => dispatch(signOutAction(redirect)),
});

export default withRouter(
  // @ts-ignore
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(GoogleSignOut),
);
