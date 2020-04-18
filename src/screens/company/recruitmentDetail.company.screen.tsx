import React, {FC, useEffect, useState} from 'react';
import {Table, Typography, Modal, Tabs, Button, Row, Col} from 'antd';
import {connect} from 'react-redux';
import {
  getAllApplications,
  getAllRounds,
  moveToNextRound,
  placeStudent,
  rejectApplication,
} from '../../helpers/api/company.api.helper';
import {openNotificationWithIcon} from '../../helpers/notification.helper';
import StudentModalCard from '../../components/studentModalCard.company';
import {getCourse} from '../../helpers/courses';

const {Title} = Typography;
const {TabPane} = Tabs;

interface IProps {
  match: any;
  history: any;
}

const RecruitmentDetailCompanyScreen: FC<IProps> = ({match}: IProps) => {
  const [visible, changeVisible] = useState(false);
  const [selectedStudents, changeSelectedStudents] = useState([]);
  const [studentId, changeStudentId] = useState(1);
  const [allApplications, changeAllApplications] = useState([]);
  const [allRounds, changeAllRounds] = useState([{id: 0, title: 'Coding Round'}]);
  const [activeTab, changeActiveTab] = useState('Applications');
  const [loading, changeLoading] = useState(false);
  const [reload, changeReload] = useState(false);
  const filterApplications = (type: string, application: any) => {
    return application.filter((i: any) => {
      return i.status === type;
    });
  };
  const {id} = match.params;
  useEffect(() => {
    const load = async () => {
      changeLoading(true);
      try {
        const applications = await getAllApplications(id);
        const rounds = await getAllRounds(id);
        changeAllApplications(applications);
        changeAllRounds(rounds);
        changeLoading(false);
        console.log(applications, rounds);
      } catch (e) {
        openNotificationWithIcon(
          'warning',
          'Unknown error occurred',
          'Try signing out or refreshing page',
        );
        changeLoading(false);
      }
    };
    load();
  }, [match, id, reload]);

  const toggleModel = (value: boolean) => {
    changeVisible(value);
  };
  const roundsFilter = (roundId: number, applications: any) => {
    return applications.filter((i: any) => {
      return i.round === roundId;
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: any, record: any) => (
        <Button
          type='link'
          onClick={() => {
            changeVisible(true);
            changeStudentId(record.id);
          }}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Roll No.',
      dataIndex: 'roll',
    },
    {
      title: 'Course',
      dataIndex: 'course',
      render: (text: any, record: any) => (
        <p>
          {getCourse(text)
            .join('/')
            .replace(' Programmes', '')}
        </p>
      ),
    },
    {
      title: 'Year',
      dataIndex: 'year',
    },
    {
      title: 'Applied At',
      dataIndex: 'applied_at',
      render: (text: any) => <p style={{margin: 0}}>{text.slice(0, 10)}</p>,
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      const studentArray = selectedRows.map((i: any) => {
        return i.student;
      });
      console.log(studentArray);
      changeSelectedStudents(studentArray);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className='container'>
      <Row>
        <Title>All Application</Title>
      </Row>
      <Row align='middle' justify='space-between'>
        {activeTab === 'Applications' ? (
          <Col xs={24} sm={24} md={5} lg={5} xl={5}>
            <Button
              onClick={async () => {
                try {
                  await rejectApplication(id, selectedStudents);
                  changeReload(!reload);
                } catch (e) {
                  openNotificationWithIcon(
                    'warning',
                    'Unknown error occurred',
                    'Try signing out or refreshing page',
                  );
                }
              }}
              type='primary'>
              Reject Selected Applications
            </Button>
          </Col>
        ) : null}
        {/* eslint-disable-next-line radix */}
        {activeTab !== 'Rejected' &&
        activeTab !== 'Placed' &&
        parseInt(activeTab, 10) !== allRounds.length - 1 ? (
          <Col xs={24} sm={24} md={5} lg={5} xl={5}>
            <Button
              onClick={async () => {
                try {
                  // eslint-disable-next-line radix
                  await moveToNextRound(
                    id,
                    selectedStudents,
                    allRounds[parseInt(activeTab, 10) + 1].id,
                  );
                  changeReload(!reload);
                } catch (e) {
                  openNotificationWithIcon(
                    'warning',
                    'Unknown error occurred',
                    'Try signing out or refreshing page',
                  );
                }
              }}
              type='primary'>
              Move Selected To Next Round
            </Button>
          </Col>
          ) : null}
        {/* eslint-disable-next-line radix */}
        {parseInt(activeTab) === allRounds.length - 1 ? (
          <Col xs={24} sm={24} md={5} lg={5} xl={5}>
            <Button
              onClick={async () => {
                try {
                  await placeStudent(id, selectedStudents);
                  changeReload(!reload);
                } catch (e) {
                  openNotificationWithIcon(
                    'warning',
                    'Unknown error occurred',
                    'Try signing out or refreshing page',
                  );
                }
              }}
              type='primary'>
              Place Selected Students
            </Button>
          </Col>
        ) : null}
      </Row>
      <br />
      <Row>
        <Col>
          <Tabs
            defaultActiveKey='Applications'
            tabPosition='left'
            onChange={(e: any) => {
              changeActiveTab(e);
            }}>
            <TabPane tab='Applications' key='Applications'>
              <Table
                loading={loading}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={filterApplications('A', allApplications)}
                key={filterApplications('A', allApplications).id}
              />
            </TabPane>
            {allRounds.map((i, index) => {
              const key = index.toString();
              return (
                <TabPane tab={i.title} key={key}>
                  <Table
                    loading={loading}
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={roundsFilter(i.id, filterApplications('O', allApplications))}
                    key={roundsFilter(i.id, filterApplications('O', allApplications))}
                  />
                </TabPane>
              );
            })}
            <TabPane tab='Placed' key='Placed'>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={filterApplications('P', allApplications)}
                key={filterApplications('P', allApplications)}
              />
            </TabPane>
            <TabPane tab='Rejected' key='Rejected'>
              <Table
                rowSelection={rowSelection}
                loading={loading}
                columns={columns}
                key={filterApplications('R', allApplications)}
                dataSource={filterApplications('R', allApplications)}
              />
            </TabPane>
          </Tabs>
          <Modal
            title='Student Info'
            visible={visible}
            onOk={() => toggleModel(false)}
            onCancel={() => toggleModel(false)}>
            <StudentModalCard id={studentId} user={allApplications[studentId - 1]} />
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  inProgress: state.auth.inProgress,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RecruitmentDetailCompanyScreen);
