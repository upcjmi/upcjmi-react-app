import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {IReduxState} from 'reducers';
import {IDispatchFunction} from 'types/common.type';
import SignInScreen from './signIn.screen';
import {IUserMeta} from '../types/api.type';
import {
  COMPANY_PORTAL_HOME_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from '../constants/routes/main.paths.constant';

interface IStateProps {
  user: IUserMeta | undefined;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

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

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: IDispatchFunction): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortalScreen);
