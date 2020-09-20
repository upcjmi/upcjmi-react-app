import React, {FC} from 'react';
import {Typography, Row, Col, Timeline, Icon, Divider, Button} from 'antd';
import {Link} from 'react-router-dom';
import {PlacementTimelineStudent} from '../../constants/home/placementTimeline';
import {
  SIGN_UP_PATH_COMPANY,
  SIGN_UP_PATH_STUDENT,
} from '../../constants/routes/main.paths.constant';


interface IProps {}
const {Item} = Timeline
const {Title,Paragraph} = Typography;


const finalIcon = {
  dot:<Icon type='check-circle-o' style={{ fontSize: '16px' }} />
}
const PlacementProcess: FC<IProps> = () => (
  <div id='placement-process' className='container full-page grey lighten-3'>
    <Row className='center'>
      <Col span={24}>
        <Title>Placement Process</Title>
      </Col>
    </Row>
    <Row className='center white' gutter={32}>
      <Col sm={24} md={12}>
        <br />
        <Title>Students</Title>
        <Timeline mode='alternate'>
          {PlacementTimelineStudent.map((Ele,Index)=>(
            <Item {...Index===(PlacementTimelineStudent.length-1)?finalIcon:{}}>
              <div>
                <Title level={3} className='m-0 p-0'>
                  {Ele.title}
                </Title>
                <Paragraph>
                  {Ele.description}
                </Paragraph>
              </div>
            </Item>
          ))}
        </Timeline>
        <Button type='primary' className='my-2'>
          <Link to={SIGN_UP_PATH_STUDENT}>
            <Icon type='user-add' />
        Create Student Account
          </Link>
        </Button>
      </Col>
      <Col sm={24} md={12}>
        <br />
        <Title>Company</Title>
        <Timeline mode='alternate'>
          {PlacementTimelineStudent.map((Ele,Index)=>(
            <Item {...Index===(PlacementTimelineStudent.length-1)?finalIcon:{}}>
              <div>
                <Title level={3} className='m-0 p-0'>
                  {Ele.title}
                </Title>
                <Paragraph>
                  {Ele.description}
                </Paragraph>
              </div>
            </Item>
          ))}
        </Timeline>
        <Button type='primary' className='my-2'>
          <Link to={SIGN_UP_PATH_COMPANY}>
            <Icon type='user-add' />
              Create Company Account
          </Link>
        </Button>
      </Col>
    </Row>
  </div>
);

export default PlacementProcess;
