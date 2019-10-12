import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Result} from 'antd';
import SignIn from 'components/userAccountButton';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IProps extends IStateProps {}

const OnlyPublic: FC<IProps> = ({isAuthenticated}: IProps) => (
  <div className='full-page center-hv'>
    <Result
      status='403'
      title='403'
      subTitle={
        isAuthenticated
          ? "Sorry, but you don't have permission to view this screen."
          : 'You need to sign in to view this screen.'
      }
      extra={
        !isAuthenticated ? <SignIn /> : 'Try signing out and signing in with different account.'
      }
    />
  </div>
);

const mapStateToProps = (state: any): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(OnlyPublic);
