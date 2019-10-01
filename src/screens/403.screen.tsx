import React, {FC} from 'react';
import {Result} from 'antd';
import {connect} from 'react-redux';

import SignIn from 'components/userAccountButton';
import {IReduxState} from 'reducers';
import {IDispatchFunction} from 'types/common.type';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const NotAuthorisedScreen: FC<IProps> = ({isAuthenticated}: IProps) => (
  <div className='full-page center-hv'>
    <Result
      status='403'
      title='403'
      subTitle={
        isAuthenticated
          ? 'Sorry, but you don't have permission to view this screen.'
          : 'You need to sign in to view this screen.'
      }
      extra={
        !isAuthenticated ? <SignIn /> : 'Try signing out and signing in with different account.'
      }
    />
  </div>
);

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: IDispatchFunction): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotAuthorisedScreen);
