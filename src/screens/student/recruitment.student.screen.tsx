import React, {FC, useState, useEffect} from 'react';
import {Typography, Skeleton, Card} from 'antd';
import CompanyDrives from '../../components/student/companyDrives';
import {getAllCompaniesAPI} from '../../helpers/api/company.api.helper';

interface IProps {
}


const {Title} = Typography;


const RecruitmentStudentScreen: FC<IProps> = (props: IProps) => {
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
      <Title>
        Recruitment Drives
      </Title>
      {jobs.length === 0 ? 'No jobs are ready for now' : null}

      {loading? (
        <Card>
          <Skeleton />
        </Card>
      ) : jobs}
    </div>
  );
};


export default RecruitmentStudentScreen;
