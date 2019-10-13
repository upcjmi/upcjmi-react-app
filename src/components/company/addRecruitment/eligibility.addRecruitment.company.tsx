import React, {FC} from 'react';
import {Typography} from 'antd';

interface IProps {
  action: any;
  next: any;
  data: any;
}

const {Title} = Typography;

const EligibilityAddRecruitmentCompany: FC<IProps> = ({action, data, next}: IProps) => {
  return (
    <div>
      <Title level={3}>Eligibility</Title>
    </div>
  );
};

export default EligibilityAddRecruitmentCompany;
