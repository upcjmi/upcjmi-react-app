import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Typography} from 'antd';

import {IDispatchFunction} from '../../types/common.type';
import {IReduxState} from '../../reducers';
import {IUserMeta} from '../../types/api.type';
import NotAuthorisedScreen from '../403.screen';

interface IStateProps {
  user: IUserMeta | undefined;
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const {Title} = Typography;

const HomeStudentScreen: FC<IProps> = (props: IProps) => {
  const {user, isAuthenticated} = props;

  if (!isAuthenticated) return <NotAuthorisedScreen />;

  if (user && user.type !== 'S') return <NotAuthorisedScreen />;

  return (
    <div className='container'>
      <Title>Student Portal</Title>
    </div>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: IDispatchFunction): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeStudentScreen);
