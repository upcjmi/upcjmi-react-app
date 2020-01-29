import React, {FC, useState, Suspense} from 'react';
import {Typography, Card, Col, Row, Steps, Icon, Alert} from 'antd';
import {selectScreen} from 'helpers/screen.helper';
import {addRecruitmentSteps} from 'steps/addRecruitment.steps';
import LoadingComponentScreen from 'screens/loadingComponent.screen';

interface IProps {}

const {Title} = Typography;
const {Step} = Steps;

const emptyData = {
  basic: {},
  rounds: [],
  eligibility: {
    years: [],
    courses: [],
  },
};

const AddRecruitmentCompanyScreen: FC<IProps> = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState(emptyData);

  const next = () => {
    window.scrollTo(0, 0);
    setActive(active + 1);
  };
  const previous = () => setActive(active - 1);
  const startAgain = () => {
    setActive(0);
  };

  const AddRecruitmentComponent = addRecruitmentSteps[active].component;

  return (
    <div className='center-hv full-page container'>
      <div className='signinScreen-card' style={{width: 600}}>
        <Alert
          message='After adding a requirement it takes 1-2 working days for processing. '
          type='info'
        />
        <br />
        <Card>
          <Title>New Recruitment</Title>
          <Steps size='small' labelPlacement='vertical' current={active}>
            {addRecruitmentSteps.slice(0, 3).map(({title, icon}, index) => (
              <Step title={title} icon={<Icon type={icon} />} key={index.toString()} />
            ))}
          </Steps>
          <br />
          <Suspense fallback={<LoadingComponentScreen />}>
            <AddRecruitmentComponent
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

export default AddRecruitmentCompanyScreen;
