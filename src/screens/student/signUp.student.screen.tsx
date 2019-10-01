import React, {FC, useState, Suspense} from 'react';
import {connect} from 'react-redux';
import {Card, Typography, Alert, Steps, Icon} from 'antd';
import {IReduxState} from 'reducers';
import LoadingScreen from 'screens/loading.screen';
import OnlyPublic from 'screens/403.onlyPublic';
import {signUpNavigation} from 'constants/signUp';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const emptyData = {
  basic: {},
  account: {},
};

const {Title} = Typography;
const {Step} = Steps;

// eslint-disable-next-line no-unused-vars
const SignUpStudentScreen: FC<IProps> = ({isAuthenticated}: IProps) => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState(emptyData);

  if (isAuthenticated && active !== 3) return <OnlyPublic />;

  const next = () => {
    window.scrollTo(0, 0);
    setActive(active + 1);
  };
  const previous = () => setActive(active - 1);
  const startAgain = () => {
    setActive(0);
  };

  const SignUpComponent: any = signUpNavigation[active].component;

  return (
    <div className='container center-hv full-page' style={{backgroundColor: '#EEEEEE'}}>
      <div>
        <Alert
          message={
            'This is only for students. ' +
            'If you are a company representative contact us via mail.'
          }
          type='info'
          style={{maxWidth: '95vw', width: 450}}
        />
        <br />
        <Card style={{maxWidth: '95vw', width: 450}}>
          <Title>Create New Account</Title>
          <br />
          <Steps size='small' labelPlacement='vertical' current={active}>
            {signUpNavigation.slice(0, 3).map(({title, icon}, index) => (
              <Step title={title} icon={<Icon type={icon} />} key={index.toString()} />
            ))}
          </Steps>
          <Suspense fallback={<LoadingScreen />}>
            <SignUpComponent
              next={next}
              action={setData}
              data={data}
              previous={previous}
              startAgain={startAgain}
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
)(SignUpStudentScreen);
