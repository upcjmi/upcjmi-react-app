import React, {FC, useEffect, useState} from 'react';
import {Table, Modal, Button} from 'antd';
import {connect} from 'react-redux';
import {loadAllApplications, loadAllRounds} from '../../actions/company.action';
import {getStudentExtraDetailsWithId} from '../../helpers/api/student.api.helper';

interface IProps {
  match: any;
  history: any;
  getAllApplications: any;
  getAllRounds: any;
}

const RecruitmentDetailCompanyScreen: FC<IProps> = ({
  match,
  getAllApplications,
  getAllRounds,
}: IProps) => {
  const [visible, changeVisible] = useState(false);
  const [studentId, changeStudentId] = useState(0);
  useEffect(() => {
    const load = async () => {
      try {
        const {id} = match.params;
        // await getAllApplications(id)
        // await getAllRounds(id)
        const data = await getStudentExtraDetailsWithId(1);
        console.log('extrainfo', data);
      } catch (e) {
        console.error(e);
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
            changeStudentId(record.key);
          }}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
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

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  return (
    <div>
      {/* {match.params.id} */}
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <Modal
        title='Basic Modal'
        visible={visible}
        onOk={() => toggleModel(false)}
        onCancel={() => toggleModel(false)}>
        {studentId}
        {/* <ProfileCardStudent editable={false} key={studentId} /> */}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  inProgress: state.auth.inProgress,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllApplications: (jobId: number) => dispatch(loadAllApplications(jobId)),
  getAllRounds: (jobId: number) => dispatch(loadAllRounds(jobId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecruitmentDetailCompanyScreen);
