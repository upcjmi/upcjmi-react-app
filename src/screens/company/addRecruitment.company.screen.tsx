import React, {FC} from 'react';
import {Typography, Card, Col, Row, Steps, Icon} from 'antd';
import BasicAddRecruitment from 'components/company/addRecruitment/basic.addRecruitment';
import {selectScreen} from 'helpers/screen.helper';

interface IProps {}

const {Title} = Typography;
const {Step} = Steps;

const AddRecruitmentCompanyScreen: FC<IProps> = (props: IProps) => (
  <div className='container'>
    <Row gutter={24}>
      <Col sm={24} md={12} offset={selectScreen(0, 6)}>
        <Card>
          <Title>New Recruitment</Title>
          <Steps size='small' labelPlacement='vertical'>
            <Step title='Basic Details' icon={<Icon type='solution' />} />
            <Step title='Rounds' icon={<Icon type='profile' />} />
            <Step title='Eligibility' icon={<Icon type='smile-o' />} />
          </Steps>
          <br />
          <BasicAddRecruitment />
        </Card>
      </Col>
    </Row>
  </div>
);

export default AddRecruitmentCompanyScreen;
