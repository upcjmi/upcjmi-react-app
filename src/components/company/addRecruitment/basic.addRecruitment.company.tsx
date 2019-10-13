import React, {FC} from 'react';
import {Typography} from 'antd';
import FormCreator from 'components/formCreator';
import {basicAddRecruitmentTForm} from 'forms/addRecruitment/basic.addRecruitment.tForm';

interface IProps {
  action: any;
  next: any;
  data: any;
}

const {Title} = Typography;

const BasicAddRecruitmentCompany: FC<IProps> = ({action, data, next}: IProps) => {
  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={basicAddRecruitmentTForm}
      submitButtonText='Save and Next'
      onSubmit={(objForm: any) => {
        action({
          ...data,
          basic: {
            ...data.basic,
            ...objForm.getFieldsValue(),
          },
        });
        next();
      }}
    />
  );

  return (
    <div>
      <Title level={3}>Basic Details</Title>
      {form}
    </div>
  );
};

export default BasicAddRecruitmentCompany;
