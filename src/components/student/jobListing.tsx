import React, {FC} from 'react';
import {Button, Card, Descriptions} from 'antd';
import {Link} from 'react-router-dom';

interface IProps {
  job: any;
  companyId: number;
}


const JobListing: FC<IProps> = ({job, companyId}: IProps) => {
  const {title, package: pay, courses_allowed: courses, close, id} = job;

  return (
    <Card>
      <Descriptions title={title}>
        <Descriptions.Item label='Package'>{pay}</Descriptions.Item>
        <Descriptions.Item label='Courses Allowed'>{courses}</Descriptions.Item>
        <Descriptions.Item label='Apply by'>
          {(new Date(close)).toLocaleString()}
        </Descriptions.Item>
      </Descriptions>
      <Link to={`/company/${companyId}/job/${id}/`}>
        <Button type='primary'>
          View full details
        </Button>
      </Link>
    </Card>
  );
};


export default JobListing;
