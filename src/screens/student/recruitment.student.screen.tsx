import React, {FC, useState, useEffect} from 'react';
import {Typography, Skeleton, Card, Empty} from 'antd';
import CompanyDrives from 'components/student/companyDrives.student';
import {getAllCompaniesAPI} from 'helpers/api/company.api.helper';

interface IProps {}

const {Title} = Typography;

const RecruitmentStudentScreen: FC<IProps> = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getAllCompaniesAPI();
      // @ts-ignore
      setCompanies(data);
      setLoading(false);
    };

    load();
  }, []);

  const jobs = companies.map((company, index) => (
    <CompanyDrives key={index.toString()} company={company} />
  ));

  return (
    <div className='container'>
      <Title>Recruitment Drives</Title>
      {jobs.length === 0 && !loading ? (
        <Card>
          <Empty description='No jobs are available for now' />
        </Card>
      ) : null}

      {loading ? (
        <Card>
          <Skeleton />
        </Card>
      ) : (
        jobs
      )}
    </div>
  );
};

export default RecruitmentStudentScreen;
