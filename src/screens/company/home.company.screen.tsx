import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Typography, Row, Col, Card, Button, Descriptions} from 'antd';

import {IReduxState} from 'reducers';
import {IUserMeta} from 'types/api.type';
import NoticeBoard from 'components/noticeBoard';
import CompanyDetail from 'components/company/companyDetail.company';
import NotAuthorisedScreen from '../403.screen';

interface IStateProps {
  user: IUserMeta | undefined;
  isAuthenticated: boolean;
}

interface IProps extends IStateProps {}

const {Title} = Typography;

const HomeCompanyScreen: FC<IProps> = (props: IProps) => {
  const {user, isAuthenticated} = props;

  if (!isAuthenticated) return <NotAuthorisedScreen />;

  if (user && user.type !== 'C') return <NotAuthorisedScreen />;

  return (
    <div className='container'>
      <Row gutter={24}>
        <Col sm={24} md={12}>
          <CompanyDetail />
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

export default connect(mapStateToProps)(HomeCompanyScreen);
