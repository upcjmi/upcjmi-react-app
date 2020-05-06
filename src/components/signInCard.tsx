import React, {FC} from 'react';
import {Button, Typography} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {IReduxState} from 'reducers';
import {IUserMeta} from 'types/api.type';
import {
  COMPANY_PORTAL_HOME_PATH,
  HOME_PATH, SIGN_UP_PATH_COMPANY,
  SIGN_UP_PATH_STUDENT,
  STUDENT_PORTAL_HOME_PATH,
} from 'constants/routes/main.paths.constant';
import EmailSignIn from './auth/email.signIn';
import GoogleSignIn from './auth/google.signIn';

interface IStateProps {
  isAuthenticated: boolean;
  user: IUserMeta | undefined;
}

interface IProps extends IStateProps {}

const {Title} = Typography;

const SignInCard: FC<IProps> = ({isAuthenticated, user}: IProps) => {
  console.log(user,"gg");
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
      <div className='center'>OR</div>
      <br />
      <EmailSignIn />
      <br />
      <Link to={SIGN_UP_PATH_STUDENT}>
        <Button type='dashed' className='full-width' icon='user-add' size='large'>
          Create Student Account
        </Button>
      </Link>
      <br />
      <br />
      <Link to={SIGN_UP_PATH_COMPANY}>
        <Button type='dashed' className='full-width' icon='user-add' size='large'>
          Create Company Account
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
