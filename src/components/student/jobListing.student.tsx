import React, {FC} from 'react';
import {Button, Card, Descriptions} from 'antd';
import {Link} from 'react-router-dom';
import moment from 'moment';

interface IProps {
  job: any;
  companyId: number;
}

const JobListing: FC<IProps> = ({job, companyId}: IProps) => {
  const {title, package: pay, close, id} = job;

  return (
    <Card>
      <Descriptions title={title}>
        <Descriptions.Item label='Package'>
          {pay}
          {' '}
LPA
        </Descriptions.Item>
        {/* <Descriptions.Item label='Courses Allowed'>{courses}</Descriptions.Item> */}
        <Descriptions.Item label='Last date of application'>
          {moment(close).format('LLL')}
        </Descriptions.Item>
      </Descriptions>
      <Link to={`/company/${companyId}/job/${id}/`}>
        <Button type='primary'>View full details</Button>
      </Link>
    </Card>
  );
};

export default JobListing;
