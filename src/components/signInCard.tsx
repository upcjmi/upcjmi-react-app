import React, {FC} from 'react';
import {Button, Typography} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import EmailSignIn from './auth/email.signIn';
import GoogleSignIn from './auth/google.signIn';
import {
  COMPANY_PORTAL_HOME_PATH,
  HOME_PATH,
  SIGN_UP_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from '../constants/paths.constant';
import {IReduxState} from '../reducers';
import {IUserMeta} from '../types/api.type';

interface IStateProps {
  isAuthenticated: boolean;
  user: IUserMeta | undefined;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const {Title} = Typography;

const SignInCard: FC<IProps> = ({isAuthenticated, user}: IProps) => {
  if (isAuthenticated && user) {
    switch (user.type) {
      case 'C':
        return <Redirect to={COMPANY_PORTAL_HOME_PATH} />;
      case 'S':
        return <Redirect to={STUDENT_PORTAL_HOME_PATH} />;
      default:
        return <Redirect to={HOME_PATH} />;
    }
  }

  return (
    <div>
      <Title>Sign In</Title>
      <GoogleSignIn />
      <br />
      <br />
      <div style={{textAlign: 'center'}}>OR</div>
      <br />
      <EmailSignIn />
      <br />
      <Link to={SIGN_UP_PATH}>
        <Button type='dashed' style={{width: '100%'}} icon='user-add' size='large'>
          Create New Account
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(SignInCard);
