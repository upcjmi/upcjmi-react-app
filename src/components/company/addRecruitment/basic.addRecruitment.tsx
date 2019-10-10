import React, {FC} from 'react';
import {Typography} from 'antd';
import FormCreator from 'components/formCreator';
import {basicAddRecruitmentTForm} from 'forms/addRecruitment/basic.addRecruitment.tForm';

interface IProps {}

const {Title} = Typography;

const BasicAddRecruitment: FC<IProps> = (props: IProps) => {
  const form = (
    // @ts-ignore
    <FormCreator formTemplate={basicAddRecruitmentTForm} submitButtonText='Save and Next' />
  );

  return (
    <div>
      <Title level={4}>Basic Details</Title>
      {form}
    </div>
  );
};

export default BasicAddRecruitment;
