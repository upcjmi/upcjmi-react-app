import React, {FC} from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {IReduxState} from '../reducers';
import {SIGN_IN_PATH} from '../constants/paths.constant';
import SignOutButton from './signOutButton';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const UserAccountButton: FC<IProps> = (props: IProps) => {
  const {isAuthenticated} = props;

  if (isAuthenticated) return <SignOutButton />;

  return (
    <Link to={SIGN_IN_PATH}>
      <Button type='primary' size='large' icon='login'>
        Sign In
      </Button>
    </Link>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(UserAccountButton);
