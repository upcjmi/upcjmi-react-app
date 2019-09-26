import React, {FC, useEffect, useState} from 'react';
import {Card, Col, Row, Typography, Skeleton} from 'antd';

import {ICompany} from '../../types/company.api.type';
import {getJobBasicDetailsAPI} from '../../helpers/api/company.api.helper';
import {openNotificationWithIcon} from '../../helpers/notification.helper';
import JobListing from './jobListing';


interface IProps {
  company: ICompany;
}

const {Title} = Typography;

const CompanyDrives: FC<IProps> = ({company}: IProps) => {

  const [jobs, setJobs] = useState([{id: ''}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try{
        const data = await getJobBasicDetailsAPI(company.id);
        setJobs(data);
        setLoading(false);
      } catch (e) {
        openNotificationWithIcon(
          'error',
          `Some unknown error occurred while fetching ${company.name} details`,
          'Try refreshing the page'
        )
      }
    };

    load();
  }, [company]);

  if(jobs === [] && !loading)
    return null;

  const cards = jobs.map((job) => (
    <Col xs={24} key={job.id.toString()}>
      <JobListing job={job} companyId={company.id} />
    </Col>
  ));

  return (
    <div>
      <br />

      <Title level={3}>
        {company.name}
      </Title>

      <Row>
        {loading? (
          <Card>
            <Skeleton />
          </Card>
        ) : cards}
      </Row>

      <br />
      <br />
    </div>
  );
};


export default CompanyDrives;
