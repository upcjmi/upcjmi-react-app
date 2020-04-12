import React, {FC, useEffect, useState} from 'react';
import {Typography, Button, Table, Tag} from 'antd';
import {Link} from 'react-router-dom';
import {allJobsByCompany} from '../../helpers/api/company.api.helper';
import {openNotificationWithIcon} from '../../helpers/notification.helper';

interface IProps {}

const {Title} = Typography;

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (title: string) => <Link to='1/'>{title}</Link>,
  },
  {
    title: 'Ongoing Round',
    dataIndex: 'current_round_name',
    key: 'current_round_name',
  },
  {
    title: 'Next Round',
    dataIndex: 'next_round_name',
    key: 'next_round_name',
  },
  {
    title: 'Applications',
    dataIndex: 'applications',
    key: 'applications',
  },
  {
    title: 'Status',
    dataIndex: 'review_status',
    key: 'review_status',
    render: (status: string) => {
      let color = status.length > 5 ? 'geekblue' : 'green';
      let text = '';
      switch (status) {
        case 'I':
          color = 'geekblue';
          text = 'In Review';
          break;
        case 'A':
          color = 'green';
          text = 'Approved';
          break;

        case 'R':
          color = 'red';
          text = 'Not Approved';
          break;
        default:
          color = 'black';
          text = 'Unknown';
      }
      return (
        <Tag color={color} key={status}>
          {text.toUpperCase()}
        </Tag>
      );
    },
  },
];

const RecruitmentCompanyScreen: FC<IProps> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setData(await allJobsByCompany());
        setLoading(false);
      } catch (e) {
        console.log(e);
        openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page');
      }
    };

    load();
  }, []);

  return (
    <div className='container'>
      <Title>Recruitment</Title>
      <Link to='/recruitment/add/'>
        <Button type='primary' icon='plus'>
          Add Recruitment
        </Button>
      </Link>
      <br />
      <br />
      <Table columns={columns} dataSource={data} loading={loading} />
    </div>
  );
};

export default RecruitmentCompanyScreen;
