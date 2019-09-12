import React, {FC, useState} from 'react';
import {Drawer, Button, Typography} from 'antd';
import {connect} from 'react-redux';

import GoogleSignIn from './auth/google.signIn';
import EmailSignIn from './auth/email.signIn';
import {IDispatchFunction, ISignInOptions} from '../types/common.type';
import {IReduxState} from '../reducers';
import GoogleSignOut from './auth/google.signOut';
import DefaultSignOut from './auth/default.signOut';

interface IStateProps {
  isAuthenticated: boolean;
  signedWith: ISignInOptions;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const {Title} = Typography;

const SignIn: FC<IProps> = (props: IProps) => {
  const {isAuthenticated, signedWith} = props;
  const [isVisible, setVisibility] = useState(false);

  if (isAuthenticated) {
    switch (signedWith) {
      case 'G':
        return <GoogleSignOut />;
      case 'E':
      case 'U':
      default:
        return <DefaultSignOut />;
    }
  }

  const toggleDrawer = () => setVisibility(!isVisible);

  return (
    <>
      <Button icon="login" onClick={toggleDrawer} type="primary">
        Sign In
      </Button>
      <Drawer visible={isVisible} closable destroyOnClose onClose={toggleDrawer} width={300}>
        <Title>Sign In</Title>

        <EmailSignIn />
        <GoogleSignIn />
      </Drawer>
    </>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  signedWith: state.auth.signedWith,
});

export default connect(mapStateToProps)(SignIn);
