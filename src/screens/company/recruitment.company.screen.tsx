import React, {FC} from 'react';
import {Typography, Button, Table} from 'antd';
import {Link} from 'react-router-dom';

interface IProps {}

const {Title} = Typography;

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Next Round',
    dataIndex: 'next_round',
    key: 'nextRound',
  },
  {
    title: 'Ongoing Round ',
    dataIndex: 'round',
    key: 'round',
  },
  {
    title: 'Selected students',
    dataIndex: 'selected',
    key: 'selected',
  },
];

const RecruitmentCompanyScreen: FC<IProps> = () => (
  <div className='container'>
    <Title>Recruitment</Title>
    <Link to='/recruitment/add/'>
      <Button type='primary' icon='plus'>
        Add Recruitment
      </Button>
    </Link>
    <br />
    <br />
    <Table columns={columns} dataSource={[]} />
  </div>
);

export default RecruitmentCompanyScreen;
