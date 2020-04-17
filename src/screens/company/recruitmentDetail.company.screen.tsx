import React, {FC, useEffect, useState} from 'react';
import {Table, Typography, Modal, Button, Row, Col, Select} from 'antd';
import {connect} from 'react-redux';
import {getAllApplications, getAllRounds} from '../../helpers/api/company.api.helper';
import {openNotificationWithIcon} from '../../helpers/notification.helper';
import StudentModalCard from '../../components/studentModalCard.company';

const {Option} = Select;
const {Title} = Typography;

interface IProps {
  match: any;
  history: any;
}

const RecruitmentDetailCompanyScreen: FC<IProps> = ({match}: IProps) => {
  const [visible, changeVisible] = useState(false);
  const [currentRound, changeCurrentRound] = useState(0);
  const [studentId, changeStudentId] = useState(1);
  const [allApplications, changeAllApplications] = useState([]);
  const [allRounds, changeAllRounds] = useState([{id: 0, title: 'Coding Round'}]);
  useEffect(() => {
    const load = async () => {
      try {
        const {id} = match.params;
        const applications = await getAllApplications(id);
        const rounds = await getAllRounds(id);
        changeAllApplications(applications);
        changeAllRounds(rounds);
        console.log(applications, rounds);
        // const data = await getStudentExtraDetailsWithId(1);
        // console.log('extrainfo', data);
      } catch (e) {
        openNotificationWithIcon(
          'warning',
          'Unknown error occurred',
          'Try signing out or refreshing page',
        );
      }
    };
    load();
  }, [match]);

  const toggleModel = (value: boolean) => {
    changeVisible(value);
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
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Title level={3}>Current Round : </Title>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Title level={4}>{allRounds[currentRound].title}</Title>
        </Col>
      </Row>
      <Row align='middle'>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Title level={3}>Select Round : </Title>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <Select defaultValue={0} onChange={(e: any) => changeCurrentRound(e)}>
            {allRounds.map(item => (
              <Option value={item.id - 1} key={item.id}>
                {item.title}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={24} md={4} lg={4} xl={4}>
          <Button
            onClick={() => {
              console.log('Ggg');
            }}
            type='primary'>
            Move Selected To Next Round
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Table rowSelection={rowSelection} columns={columns} dataSource={allApplications} />
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
