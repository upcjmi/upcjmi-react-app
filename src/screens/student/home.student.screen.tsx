import React, {FC, useEffect, useState} from 'react';
import {Button, Card, Col, Descriptions, Icon, Row, Typography} from 'antd';
import {Link} from 'react-router-dom';

import ProfileCard from '../../components/student/profileCard';
import {getAllJobsAppliedAPI} from '../../helpers/api/company.api.helper';
import {openNotificationWithIcon} from '../../helpers/notification.helper';

interface IProps {
}


const {Title} = Typography;

const HomeStudentScreen: FC<IProps> = () => {

  const [jobs, setJobs] = useState([{
    "applied_at": "2019-09-26T08:06:31.750294+05:30",
    "updated": "2019-09-26T08:06:31.750319+05:30",
    "status": "A",
    "job": "Android Architect",
    "round": "Coding Round",
    "company": "Hike Pvt Ltd",
    "job_id": 1,
    "company_id": 32
  }]);
  useEffect(() => {
    const load = async () => {
      try{

        const data = await getAllJobsAppliedAPI();
        setJobs(data);
      } catch (e) {
        openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page')
      }
    };

    load();
  }, []);

  return (
    <div className='container'>
      <Row gutter={24}>
        <Col sm={24} md={12}>
          <ProfileCard editable />
          <Button type='link'>
            <Icon type='edit' />
            Edit your full resume
          </Button>
        </Col>
        <Col sm={24} md={12}>
          <Card title='Notice Board' />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm={24} md={12}>
          <Title>
            Your job Applications
          </Title>
          {jobs === []? 'You have not applied to any job yet, find jobs at recruitment section':null}
          {
            jobs.map((job) => {
              return (
                <Card>
                  <Descriptions title={`${job.company} - ${job.job}`}>
                    <Descriptions.Item label='Applied on'>
                      {(new Date(job.applied_at)).toLocaleString()}
                    </Descriptions.Item>
                    <Descriptions.Item label='Last updated'>
                      {(new Date(job.updated)).toLocaleString()}
                    </Descriptions.Item>
                    <Descriptions.Item label='Current Round'>{job.round}</Descriptions.Item>
                  </Descriptions>
                  <Link to={`/company/${job.company_id}/job/${job.job_id}/`}>
                    <Button type='primary'>
                      View full details
                    </Button>
                  </Link>
                </Card>
              )
            })
          }
        </Col>
      </Row>
    </div>
  );
};


export default HomeStudentScreen;
