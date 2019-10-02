import React, {FC, useEffect, useState} from 'react';
import {Skeleton, Typography, Result, Descriptions} from 'antd';
import {withRouter} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {applyToCourseAPI, courseDetailsAPI} from 'helpers/api/core.api.helper';
import {captchaFormTemplate} from 'forms/captcha.tForm';
import FormCreator from 'components/formCreator';
import {openNotificationWithIcon} from 'helpers/notification.helper';


interface IProps {
  match: any;
  history: any;
}

const {Title} = Typography;

const CourseDetailsStudentScreen: FC<IProps> = ({match, history}: IProps) => {

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const [course, setCourse] = useState({
    "id": 0,
    "title": "",
    "details": "",
    "open": "",
    "close": "",
    "duration": "",
    "start_date": "",
    "end_date": "",
    "can_apply": false
  });

  useEffect(() => {
    const load = async () => {
      try {
        const data = await courseDetailsAPI(match.params.course);
        console.log(data);
        setCourse(data);
        setLoading(false);
      } catch (e) {
        setStatus(e.status);
        setLoading(false);
      }
    };

    load();
  }, [match]);

  if(loading)
    return (
      <div className='container'>
        <Skeleton />
      </div>
    );

  if(status === 400)
    return (
      <div className='container full-page center-hv'>
        <Result status='404' />
      </div>
    );

  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={captchaFormTemplate}
      submitButtonText='ENROLL YOURSELF'
      onSubmit={async (formObj: any) => {
        try{
          await applyToCourseAPI(formObj.getFieldsValue(), course.id);
          history.push('');
          openNotificationWithIcon(
            'success',
            'You application has been sent',
          )
        } catch (e) {
          openNotificationWithIcon(
            'error',
            'An unknown error occurred',
            'Try again'
          );
        }
      }}
    />
  );

  return (
    <div className='container'>
      <Title>
        {course.title}
      </Title>
      <Descriptions>
        <Descriptions.Item label='Duration'>{course.duration}</Descriptions.Item>
        <Descriptions.Item label='Start date'>
          {(new Date(course.start_date)).toLocaleString()}
        </Descriptions.Item>
        <Descriptions.Item label='End date'>
          {(new Date(course.end_date)).toLocaleString()}
        </Descriptions.Item>
        <Descriptions.Item label='Apply By'>
          {(new Date(course.close)).toLocaleString()}
        </Descriptions.Item>
      </Descriptions>
      <ReactMarkdown source={course.details} />
      {course.can_apply? form : null}
    </div>
  );
};


export default withRouter(CourseDetailsStudentScreen);
