import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {Avatar, Button, Card, Icon, Tag, Typography, Skeleton} from 'antd';

import {selectScreen} from 'helpers/screen.helper';
import {IReduxState} from 'reducers';
import {IStudentExtraDetails} from 'types/student.api.type';
import {loadStudentExtraDetails} from 'actions/student.action';
import {IUserMeta} from 'types/api.type';
import SideDrawerForm from 'components/sideDrawerForm';
import {getCourseName} from 'helpers/courses';
import {GetProfileIcon} from 'helpers/function.helper';
import ExtraDetailsChange from './extraDetailsChange.student';
import {API_BASE_URL} from '../../constants/credentials.constant';

interface IStateProps {
  extraDetails: IStudentExtraDetails | undefined | null;
  user: IUserMeta | undefined;
}

interface IDispatchProps {
  loadExtraDetails: any;
}

interface IProps extends IStateProps, IDispatchProps {
  editable: boolean;
}

const {Title, Text, Paragraph} = Typography;

const getYear = (year: number): string => {
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

const ProfileCardStudent: FC<IProps> = ({
  extraDetails,
  loadExtraDetails,
  user,
  editable = false,
}: IProps) => {
  useEffect(() => {
    loadExtraDetails();
  }, [loadExtraDetails]);

  if (extraDetails === undefined || user === undefined)
    return (
      <Card>
        <Skeleton />
      </Card>
    );

  if (extraDetails === null) {
    return (
      <Card>
        <Title level={4}>You have not added your extra info yet</Title>
        <SideDrawerForm
          trigger
          render={() => (
            // @ts-ignore
            <ExtraDetailsChange action='add' />
          )}>
          <Button type='primary' size='large'>
            Click to add
          </Button>
        </SideDrawerForm>
      </Card>
    );
  }

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
        <div>
          <Text>
            <b>
              {getCourseName(extraDetails.student.course)}
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
              {`${getYear(extraDetails.student.year)} year`}
            </b>
          </Text>
          <Button className='float-right my-2' type='link'>
            <a
              href={`${API_BASE_URL}${extraDetails.resume}`}
              rel='noopener noreferrer'
              target='_blank'>
              View Resume
            </a>
          </Button>
        </div>
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
        {editable ? (
          <SideDrawerForm
            render={() => (
              // @ts-ignore
              <ExtraDetailsChange action='edit' />
            )}>
            <Button className='float-right' type='link'>
              <Icon type='edit' />
              Edit
            </Button>
          </SideDrawerForm>
        ) : null}
      </div>
    </Card>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  extraDetails: state.student.extraDetails,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  loadExtraDetails: () => dispatch(loadStudentExtraDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardStudent);
