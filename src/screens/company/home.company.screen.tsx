import React, {FC, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Typography, Row, Col, Card, Button, Descriptions} from 'antd';

import {IReduxState} from 'reducers';
import {IUserMeta} from 'types/api.type';
import CompanyDetail from 'components/company/companyDetail.company';
import {Link} from 'react-router-dom';
import {NoticeBoard} from 'components/home/noticeBoard';
import NotAuthorisedScreen from '../403.screen';
import {allJobsByCompany} from '../../helpers/api/company.api.helper';
import {openNotificationWithIcon} from '../../helpers/notification.helper';
import {INotice} from '../../types/common.type';
import {getAllNotices} from '../../helpers/api/core.api.helper';

interface IStateProps {
  user: IUserMeta | undefined;
  isAuthenticated: boolean;
}

interface IProps extends IStateProps {}

const {Title, Paragraph} = Typography;

const HomeCompanyScreen: FC<IProps> = (props: IProps) => {
  const {user, isAuthenticated} = props;
  const [data, setData] = useState([]);
  const [loadingNotice, setLoadingNotice] = useState(true);
  const [allNotices, setAllNotices] = useState<Array<INotice>>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        const response = await allJobsByCompany();
        const notices = await getAllNotices();
        setAllNotices(notices);
        setLoadingNotice(false);

        setData(response);
        setLoading(false);
        console.log(response);
      } catch (e) {
        console.log(e);
        openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page');
      }
    };
    load();
  }, []);

  const CardJobs = () => {
    if (data[0])
      return (
        <Card>
          {data.map((i: any) => (
            <Row justify='space-between'>
              <Col span={18}>
                <Title level={4}>{i.title}</Title>
              </Col>
              <Col span={6}>
                <Button type='primary'>
                  <Link to={`recruitment/${i.id}/`} style={{color: '#fff'}}>
                    View Details
                  </Link>
                </Button>
              </Col>
              <br />
              <br />
            </Row>
          ))}
        </Card>
      );
    return (
      <Card>
        <Link to='/recruitment/add/'>
          <Button type='primary' icon='plus'>
            Add Recruitment
          </Button>
        </Link>
      </Card>
    );
  };
  if (!isAuthenticated) return <NotAuthorisedScreen />;

  if (user && user.type !== 'C') return <NotAuthorisedScreen />;

  return (
    <div className='container'>
      <br />
      <Row gutter={24}>
        <Col sm={24} md={12}>
          <CompanyDetail />
        </Col>
        <Col sm={24} md={12}>
          <NoticeBoard loading={loadingNotice} noticesData={allNotices} />
          <br />
          <CardJobs />
        </Col>
      </Row>
      <br />
      {/* <Card> */}
      {/* <Title level={2}>Drafts</Title> */}
      {/*  <Descriptions title='Android developer'> */}
      {/*    <Descriptions.Item label='Type'>Recruitment</Descriptions.Item> */}
      {/*    <Descriptions.Item label='Last updated at'> */}
      {/*      {new Date('').toLocaleString()} */}
      {/*    </Descriptions.Item> */}
      {/*    <Descriptions.Item label='Rounds'>5</Descriptions.Item> */}
      {/*    <Descriptions.Item label='Last updated at'>Courses Allowed</Descriptions.Item> */}
      {/*    <Descriptions.Item label='Application opens on'> */}
      {/*      {new Date('').toLocaleString()} */}
      {/*    </Descriptions.Item> */}
      {/*    <Descriptions.Item label='Application closes on'> */}
      {/*      {new Date('').toLocaleString()} */}
      {/*    </Descriptions.Item> */}
      {/*  </Descriptions> */}

      {/*  <Button type='primary'>Edit/Publish Draft</Button> */}
      {/* </Card> */}
    </div>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomeCompanyScreen);
