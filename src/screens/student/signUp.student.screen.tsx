import React, {FC, useState, Suspense} from 'react';
import {connect} from 'react-redux';
import {Card, Typography, Alert, Steps, Icon} from 'antd';
import {IReduxState} from 'reducers';
import OnlyPublic from 'screens/403.onlyPublic';
import {signUpSteps} from 'steps/signUp.steps';
import LoadingComponentScreen from 'screens/loadingComponent.screen';
import {Link} from 'react-router-dom';
import {
  SIGN_UP_PATH_COMPANY,
} from '../../constants/routes/main.paths.constant';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IProps extends IStateProps {}

const emptyData = {
  basic: {},
  account: {},
};

const {Title} = Typography;
const {Step} = Steps;

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

  const SignUpComponent: any = signUpSteps[active].component;

  return (
    <div className='container center-hv full-page grey lighten-3'>
      <div>
        <Alert
          message={(
            <p>
                This is only for students.
                If you are a company representative create company account
              <Link to={SIGN_UP_PATH_COMPANY}> here</Link>
            </p>
          )}
          type='info'
          className='auth-container-type-1'
        />
        <br />
        <Card className='auth-container-type-1'>
          <Title>Create New Account</Title>
          <br />
          <Steps size='small' labelPlacement='vertical' current={active}>
            {signUpSteps.slice(0, 3).map(({title, icon}, index) => (
              <Step title={title} icon={<Icon type={icon} />} key={index.toString()} />
            ))}
          </Steps>
          <Suspense fallback={<LoadingComponentScreen />}>
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

// @ts-ignore
export default connect(mapStateToProps)(SignUpStudentScreen);
