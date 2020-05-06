import React, {FC, useEffect, useState} from 'react';
import {Spin, Button} from 'antd';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {ISignUpData} from 'types/signUp.type';
import {signUpCompanyAPI,} from 'helpers/api/api.helper';
import {signUpFailedNotification, signUpSuccessfullNotification} from 'helpers/notification.helper';
import {signIn} from 'actions/auth.action';
import {IReduxState} from 'reducers';
import SignInCard from 'components/signInCard';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IDispatchProps {
  signInUser(account: any): any;
}

interface IProps extends IStateProps, IDispatchProps {
  action: any;
  data: ISignUpData;
  startAgain: any;
}

const CreatingSignUpStudent: FC<IProps> = ({
  data,
  action,
  startAgain,
  signInUser,
  isAuthenticated,
}: IProps) => {
  const [status, setStatus] = useState('progress');

  useEffect(() => {
    const save = async () => {
      action(data);
      try {
        await signUpCompanyAPI(data);
        signUpSuccessfullNotification();
        setStatus('signing');
        signInUser(data.account);
        console.log(data.account,"accout")
      } catch (e) {
        signUpFailedNotification(e && e.data ? e.data.detail : 'Unknown error occured');
        setStatus('failed');
      }
    };

    save();
  }, [data, action, signInUser]);
  console.log(isAuthenticated,"auth")

  if (isAuthenticated) return <SignInCard />;

  const spinner = (): any => {
    switch (status) {
      case 'progress':
        return <Spin tip='Creating your account' />;
      case 'signing':
        return <Spin tip='Signing you in' />;
      case 'failed':
        return (
          <div className='center'>
            Failed to create account try again. Make sure all fields are correctly entered.
            <br />
            <Button onClick={startAgain} type='danger'>
              Please Try Again
            </Button>
          </div>
        );
      default:
        return 'Unknown signing up status';
    }
  };

  return (
    <div className='height-300 center-hv'>
      <div>{spinner()}</div>
    </div>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  signInUser: account => dispatch(signIn(account)),
});

export default withRouter(
  // @ts-ignore
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CreatingSignUpStudent),
);
