import React, {FC, useState, useEffect} from 'react';
import {Button, Card, Descriptions, Skeleton, Typography} from 'antd';
import {Link} from 'react-router-dom';
import {openNotificationWithIcon} from '../../helpers/notification.helper';
import {getAllAvailableCourseAPI} from '../../helpers/api/core.api.helper';

interface IProps {
}

const {Title} = Typography;
const CoursesStudentScreen: FC<IProps> = (props: IProps) => {
  const [courses, setCourses] = useState([
    {
      "id": 0,
      "title": "",
      "details": "",
      "open": "",
      "close": "",
      "duration": "",
      "start_date": "",
      "end_date": ""
    }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try{
        const data = await getAllAvailableCourseAPI();
        setCourses(data);
        setLoading(false);
      } catch (e) {
        openNotificationWithIcon(
          'error',
          'Some unknown error occurred',
          'Try refreshing the page'
        )
      }
    };

    load();
  }, []);

  if(loading)
    return (
      <div className='container'>
        <Skeleton />
      </div>
    );

  return (
    <div className='container'>
      <Title>
        Courses offered
      </Title>
      {courses.length === 0? 'No courses available for now': null}
      {courses.map(course => (
        <Card>
          <Descriptions title={course.title}>
            <Descriptions.Item label='Duration'>{course.duration}</Descriptions.Item>
            <Descriptions.Item label='Apply By'>
              {(new Date(course.close)).toLocaleString()}
            </Descriptions.Item>
          </Descriptions>
          <Link to={`/courses/${course.id}/`}>
            <Button type='primary'>
              View all details
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
};


export default CoursesStudentScreen;
