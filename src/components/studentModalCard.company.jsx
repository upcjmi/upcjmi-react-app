import React, {useEffect, useState} from 'react';
import {Avatar, Card, Tag, Typography, Skeleton, Button} from 'antd';

import {selectScreen} from 'helpers/screen.helper';
import {GetProfileIcon} from 'helpers/function.helper';
import {Link} from 'react-router-dom';
import {openNotificationWithIcon} from '../helpers/notification.helper';
import {getStudentExtraDetailsWithId} from '../helpers/api/student.api.helper';
import {getCourse} from '../helpers/courses';

const {Title, Text, Paragraph} = Typography;
const Markdown = require('react-markdown');

const getYear = year => {
  switch (year) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    default:
      return `${year}th`;
  }
};

const StudentModalCard = ({id, user}) => {
  const [extraDetails, changeExtraDetails] = useState({
    tag_line: null,
    student: {course: '', year: 0},
    about: '',
    profiles: [{type: '', link: ''}],
    skills: [],
  });
  useEffect(() => {
    const load = async () => {
      try {
        const data = await getStudentExtraDetailsWithId(id);
        await changeExtraDetails(data);
      } catch (e) {
        openNotificationWithIcon(
          'warning',
          'Unknown error occurred',
          'Try signing out or refreshing page',
        );
      }
    };
    load();
  }, []);
  if (extraDetails === null)
    return (
      <Card>
        <Skeleton />
      </Card>
    );
  return (
    <Card>
      <div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: selectScreen('center', null),
            justifyContent: selectScreen('space-around', null),
          }}>
          <Avatar icon='user' size={64} />
          <div
            style={{
              marginLeft: selectScreen(0, 5, 10),
            }}>
            <Title className='margin-bottom-0'>{user.name}</Title>
            <Text strong>{extraDetails.tag_line}</Text>
          </div>
        </div>
        <br />
        <Text>
          <b>
            {getCourse(user.course)
              .join('/')
              .replace(' Programmes', '')}
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            {`${getYear(user.year)} year`}
          </b>
        </Text>
        <Paragraph type='secondary'>{extraDetails.about}</Paragraph>
        <div className='profile-extra-details'>
          {extraDetails.profiles.map(profile => (
            <a href={profile.link} rel='noopener noreferrer' target='_blank'>
              <GetProfileIcon type={profile.type} />
            </a>
          ))}
        </div>
        <div>
          Skills:&nbsp;&nbsp;
          {extraDetails.skills.map(skill => (
            <Tag>{skill}</Tag>
          ))}
        </div>
        <br />
        <div>
          Why Should We Hire You?&nbsp;&nbsp;
          <Markdown source={user.application} />
        </div>
      </div>
      <Button><Link to={`/recruitment/resume/${user.student}/`} target="_blank">View Resume</Link></Button>
    </Card>
  );
};
export default StudentModalCard;
