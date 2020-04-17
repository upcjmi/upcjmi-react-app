import React, {useEffect, useState} from 'react';
import {Avatar, Card, Tag, Typography, Skeleton} from 'antd';

import {selectScreen} from 'helpers/screen.helper';
import {getCourseName} from 'helpers/courses';
import {GetProfileIcon} from 'helpers/function.helper';
import {openNotificationWithIcon} from '../helpers/notification.helper';
import {getStudentExtraDetailsWithId} from '../helpers/api/student.api.helper';

const {Title, Text, Paragraph} = Typography;

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
        console.log('extrainfo', data);
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
            {user.course.slice(0, user.course.length - 7)}
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
          <Paragraph type='secondary'>{user.application}</Paragraph>
        </div>
      </div>
    </Card>
  );
};
export default StudentModalCard;
