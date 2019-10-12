import React, {FC} from 'react';
import {Result} from 'antd';
import {connect} from 'react-redux';

import {IReduxState} from 'reducers';
import SignInScreen from './signIn.screen';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IProps extends IStateProps {}

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

export default connect(mapStateToProps)(NotAuthorisedScreen);
