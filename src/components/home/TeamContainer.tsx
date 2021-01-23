import React, {FC} from 'react';
import {Col, Card, Typography} from 'antd';
import {Teamlist} from '../../constants/home/team.home.constant';
import {TeamCardHome} from './teamCard';

interface IProps {}

const {Title} = Typography;

export const TeamComponent: FC<IProps> = () => {
  return (
    <Card style={{backgroundColor: '#fafafa'}}>
      <Title className='' level={3}>
        University Placement Cell Team
      </Title>
      <br />
      <div style={{backgroundColor: '#fafafa'}}>
        {Teamlist.map(team => (
          <Col span={24}>
            <TeamCardHome {...team} key={team.name} />
          </Col>
        ))}
      </div>
    </Card>
  );
};
