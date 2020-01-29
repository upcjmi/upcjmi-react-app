import React, {FC, useEffect, useState} from 'react';
import {Typography, Button, Table} from 'antd';
import {Link} from 'react-router-dom';
import {getAllJobsAppliedAPI} from '../../helpers/api/company.api.helper';
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

const RecruitmentCompanyScreen: FC<IProps> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setData(await getAllJobsAppliedAPI());
        setLoading(false);
      } catch (e) {
        console.log(e);
        openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page');
      }
    };

    load();
  });

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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecruitmentCompanyScreen;
