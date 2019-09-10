import React, {FC} from 'react';
import {Typography, Row, Col} from 'antd';
import {TOP_RECRUITERS} from '../../constants/home/topRecruiters.constant';

interface IProps {}

const {Title} = Typography;

const TopRecruiters: FC<IProps> = () => (
  <div
    style={{textAlign: 'center', borderBottom: '1px solid #eeeeee'}}
    className="full-page container center-hv"
  >
    <div>

      <Title>Our Top Recruiters</Title>

      <Row gutter={24}>
        {TOP_RECRUITERS.map((recruiter, index) => (
          <Col xs={24} md={8} style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
            <img src={recruiter} key={index.toString()} alt="" style={{maxHeight: 50}} />
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default TopRecruiters;
