import React, {FC, lazy, useState, Suspense} from 'react';
import {connect} from 'react-redux';
import {Card, Typography, Alert, Steps, Icon, Result} from 'antd';
import LoadingScreen from './loading.screen';
import {IReduxState} from '../reducers';
import SignOutButton from '../components/signOutButton';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

interface INavigation {
  title: string;
  icon: string;
  component: any;
  action: any;
  data: any;
}

const {Title} = Typography;
const {Step} = Steps;

// eslint-disable-next-line no-unused-vars
const SignUpScreen: FC<IProps> = ({isAuthenticated}: IProps) => {
  const [active, setActive] = useState(2);
  const [basic, setBasic] = useState({});
  const [account, setAccount] = useState({});
  const [verification, setVerification] = useState({});

  if (isAuthenticated)
    return (
      <div className="full-page center-hv">
        <Result
          status="403"
          title="403"
          subTitle="Sorry you dont have permission to view this screen."
          extra={
            <div>
              You are signed in, if you want to create a new account then
              <SignOutButton redirect={false} />
            </div>
          }
        />
      </div>
    );

  const navigation: Array<INavigation> = [
    {
      title: 'Account',
      icon: 'user',
      component: lazy(() => import('../components/signUp/account.signUp')),
      action: setAccount,
      data: account,
    },
    {
      title: 'Basic Detail',
      icon: 'solution',
      component: lazy(() => import('../components/signUp/basicDetail.signUp')),
      action: setBasic,
      data: basic,
    },
    {
      title: 'Verification Document',
      icon: 'file-protect',
      component: lazy(() => import('../components/signUp/verificationDocument.signUp')),
      action: setVerification,
      data: verification,
    },
  ];

  const next = () => setActive(active + 1);
  const previous = () => setActive(active - 1);
  const done = (): void => {};

  const {action, data, component}: any = navigation[active];
  const SignUpComponent: any = component;

  return (
    <div className="container center-hv full-page" style={{backgroundColor: '#EEEEEE'}}>
      <div>
        <Alert
          message={
            'This is only for students. ' +
            'If you are a company representative contact us via mail.'
          }
          type="info"
          style={{maxWidth: '100vw', width: 450}}
        />
        <br />
        <Card style={{maxWidth: '100vw', width: 450}}>
          <Title>Create New Account</Title>
          <br />
          <Steps size="small" labelPlacement="vertical" current={active}>
            {navigation.map(({title, icon}, index) => (
              <Step title={title} icon={<Icon type={icon} />} key={index.toString()} />
            ))}
          </Steps>
          <Suspense fallback={<LoadingScreen />}>
            <SignUpComponent
              next={next}
              action={action}
              data={data}
              previous={previous}
              done={done}
            />
          </Suspense>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScreen);
