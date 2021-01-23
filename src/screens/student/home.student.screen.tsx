import React, {FC, useEffect, useState} from 'react';
import {Button, Card, Col, Descriptions, Row, Skeleton, Typography, Empty} from 'antd';
import {Link} from 'react-router-dom';

import ProfileCard from 'components/student/profileCard.student';
import {getAllJobsAppliedAPI} from 'helpers/api/company.api.helper';
import {openNotificationWithIcon} from 'helpers/notification.helper';
import {getAllAppliedCoursesAPI, getAllNotices} from 'helpers/api/core.api.helper';
import {NoticeBoard} from 'components/home/noticeBoard';
import {INotice} from '../../types/common.type';

interface IProps {}

const {Title} = Typography;

const JobApplication: FC<IProps> = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([
    {
      applied_at: '',
      updated: '',
      status: '',
      job: '',
      round: '',
      company: '',
      job_id: 1,
      company_id: 32,
    },
  ]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getAllJobsAppliedAPI();
        setJobs(data);
        setLoading(false);
      } catch (e) {
        openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page');
      }
    };

    load().then();
  }, []);

  if (loading)
    return (
      <div>
        <Title level={3}>Your job applications</Title>
        <Skeleton />
      </div>
    );

  return (
    <div>
      <Title level={3}>Your job applications</Title>
      {jobs.length === 0 ? (
        <Card>
          <Empty description='You have not applied to any job yet'>
            <Link to='/recruitment/'>
              <Button>Find Jobs</Button>
            </Link>
          </Empty>
        </Card>
      ) : null}
      {jobs.map(job => {
        return (
          <Card>
            <Descriptions title={`${job.company} - ${job.job}`}>
              <Descriptions.Item label='Applied on'>
                {new Date(job.applied_at).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label='Last updated'>
                {new Date(job.updated).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label='Current Round'>{job.round}</Descriptions.Item>
              <Descriptions.Item label='Status'>
                {() => {
                  switch (job.status) {
                    case 'A':
                      return 'Applied';
                    case 'R':
                      return 'Rejected';
                    case 'O':
                      return 'On going';
                    case 'P':
                      return 'Placed';
                    default:
                      return 'Unknown';
                  }
                }}
              </Descriptions.Item>
            </Descriptions>
            <Link to={`/company/${job.company_id}/job/${job.job_id}/`}>
              <Button type='primary'>View full details</Button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

const CourseApplication: FC<IProps> = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([
    {
      course: 'Placement and Training',
      applied_at: '2019-09-26T13:21:00.214533+05:30',
      course_id: 1,
    },
  ]);
  useEffect(() => {
    const load = async () => {
      try {
        const data = await getAllAppliedCoursesAPI();
        setCourses(data);
        setLoading(false);
      } catch (e) {
        openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page');
      }
    };

    load();
  }, []);

  if (loading)
    return (
      <div>
        <Title level={3}>Courses enrolled</Title>
        <Skeleton />
      </div>
    );

  return (
    <div>
      <Title level={3}>Courses enrolled</Title>
      {courses.length === 0 ? (
        <Card>
          <Empty description='You are not enrolled in any course'>
            <Link to='/courses/'>
              <Button>Find Course</Button>
            </Link>
          </Empty>
        </Card>
      ) : null}
      {courses.map(course => {
        return (
          <Card>
            <Descriptions title={course.course}>
              <Descriptions.Item label='Applied on'>
                {new Date(course.applied_at).toLocaleString()}
              </Descriptions.Item>
            </Descriptions>
            <Link to={`/courses/${course.course_id}/`}>
              <Button type='primary'>View full details</Button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

const HomeStudentScreen: FC<IProps> = () => {
  const [loadingNotice, setLoadingNotice] = useState(true);
  const [allNotices, setAllNotices] = useState<Array<INotice>>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllNotices();
      setAllNotices(data);
      setLoadingNotice(false);
    };
    getData();
  }, []);

  return (
    <div className='container'>
      <Row gutter={24}>
        <Col sm={24} md={12}>
          <ProfileCard editable />
          <br />
          <JobApplication />
          <br />
          <CourseApplication />
        </Col>
        <Col sm={24} md={12}>
          <NoticeBoard noticesData={allNotices} loading={loadingNotice} />
          {/* <Link to='/resume/'> */}
          {/*  <Button type='link'> */}
          {/*    <Icon type='edit' /> */}
          {/*    Edit your full resume */}
          {/*  </Button> */}
          {/* </Link> */}
        </Col>
      </Row>
    </div>
  );
};

export default HomeStudentScreen;
