import React, {FC, useEffect, useState} from 'react';
import {Typography, Button, Table} from 'antd';
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
    title: 'Students Applied',
    dataIndex: 'applications',
    key: 'applications',
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
  },[]);

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
