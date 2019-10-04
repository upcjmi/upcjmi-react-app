import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Typography, Row, Col, Card, Button, Descriptions} from 'antd';

import {IDispatchFunction} from 'types/common.type';
import {IReduxState} from 'reducers';
import {IUserMeta} from 'types/api.type';
import NoticeBoard from 'components/noticeBoard';
import NotAuthorisedScreen from '../403.screen';

interface IStateProps {
  user: IUserMeta | undefined;
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {}

const {Title, Text} = Typography;

const HomeCompanyScreen: FC<IProps> = (props: IProps) => {
  const {user, isAuthenticated} = props;

  if (!isAuthenticated) return <NotAuthorisedScreen />;

  if (user && user.type !== 'C') return <NotAuthorisedScreen />;

  return (
    <div className='container'>
      <Row gutter={24}>
        <Col sm={24} md={12}>
          <Card>
            <div>
              <Title>Hike Pvt. Ltd.</Title>
            </div>
            <Text>
              OYO Homes & Hotels, commonly known as OYO, is the world’s third-largest, one of
              China’s top two and the fastest growing hospitality chain of leased and franchised
              hotels, homes & living spaces. Founded in 2013 by Ritesh Agarwal, OYO initially
              consisted mainly of budget hotels.
            </Text>
            <Button type='link' icon='edit' style={{float: 'right'}}>
              Edit
            </Button>
          </Card>
        </Col>
        <Col sm={24} md={12}>
          <NoticeBoard />
        </Col>
      </Row>
      <br />
      <Title level={2}>Drafts</Title>
      <Card>
        <Descriptions title='Android developer'>
          <Descriptions.Item label='Type'>Recruitment</Descriptions.Item>
          <Descriptions.Item label='Last updated at'>
            {new Date('').toLocaleString()}
          </Descriptions.Item>
          <Descriptions.Item label='Rounds'>5</Descriptions.Item>
          <Descriptions.Item label='Last updated at'>Courses Allowed</Descriptions.Item>
          <Descriptions.Item label='Application opens on'>
            {new Date('').toLocaleString()}
          </Descriptions.Item>
          <Descriptions.Item label='Application closes on'>
            {new Date('').toLocaleString()}
          </Descriptions.Item>
        </Descriptions>

        <Button type='primary'>Edit/Publish Draft</Button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: IDispatchFunction): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeCompanyScreen);
