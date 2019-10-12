import React, {FC} from 'react';
import {Typography, Row, Col} from 'antd';
import {TOP_RECRUITERS} from 'constants/home/topRecruiters.home.constant';

interface IProps {}

const {Title} = Typography;

const TopRecruiters: FC<IProps> = () => (
  <div className='full-page container center-hv center top-recruiter-col'>
    <div>
      <Title>Our Top Recruiters</Title>

      <Row gutter={24}>
        {TOP_RECRUITERS.map((recruiter, index) => (
          <Col
            xs={24}
            md={8}
            className='center margin-bottom-20 margin-top-20'
            key={index.toString()}>
            <img src={recruiter} alt='' className='max-height-50' />
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default TopRecruiters;
