import React, {FC} from 'react';
import {Result} from 'antd';
import {connect} from 'react-redux';

import {IReduxState} from 'reducers';
import {IDispatchFunction} from 'types/common.type';
import SignInScreen from './signIn.screen';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const NotAuthorisedScreen: FC<IProps> = ({isAuthenticated}: IProps) => {
  if (isAuthenticated)
    return (
      <div className='full-page center-hv'>
        <Result
          status='403'
          title='403'
          subTitle={"Sorry, but you don't have permission to view this screen."}
          extra='Try signing out and signing in with different account.'
        />
      </div>
    );

  return <SignInScreen />;
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: IDispatchFunction): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotAuthorisedScreen);
