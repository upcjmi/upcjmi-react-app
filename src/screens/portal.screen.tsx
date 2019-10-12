import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {IReduxState} from 'reducers';
import SignInScreen from './signIn.screen';
import {IUserMeta} from '../types/api.type';
import {
  COMPANY_PORTAL_HOME_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from '../constants/routes/main.paths.constant';

interface IStateProps {
  user: IUserMeta | undefined;
}

interface IProps extends IStateProps {}

const PortalScreen: FC<IProps> = ({user}: IProps) => {
  const type = user ? user.type : '';

  switch (type) {
    case 'S':
      return <Redirect to={STUDENT_PORTAL_HOME_PATH} />;
    case 'C':
      return <Redirect to={COMPANY_PORTAL_HOME_PATH} />;
    default:
      return <SignInScreen />;
  }
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PortalScreen);
