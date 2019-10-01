import React, {FC} from 'react';
import {connect} from 'react-redux';

import {ISignInOptions} from 'types/common.type';
import {IReduxState} from 'reducers';
import GoogleSignOut from './auth/google.signOut';
import DefaultSignOut from './auth/default.signOut';

interface IStateProps {
  signedWith: ISignInOptions;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
  redirect?: boolean;
}

const SignOutButton: FC<IProps> = (props: IProps) => {
  const {signedWith = false, redirect = true} = props;

  switch (signedWith) {
    case 'G':
      return <GoogleSignOut redirect={redirect} />;
    case 'E':
    case 'U':
    default:
      return <DefaultSignOut redirect={redirect} />;
  }
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  signedWith: state.auth.signedWith,
});

export default connect(mapStateToProps)(SignOutButton);
