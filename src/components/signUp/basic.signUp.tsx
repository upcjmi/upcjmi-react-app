import React, {FC} from 'react';
import {Typography} from 'antd';

import FormCreator from '../formCreator';
import {ISignUpData} from '../../types/signUp.type';
import {basicTemplateForm} from '../../forms/signUp/basic.templateForm';

interface IProps {
  action: any;
  next: any;
  data: ISignUpData;
}

const {Title} = Typography;

const BasicSignUp: FC<IProps> = ({action, data, next}: IProps) => {
  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={basicTemplateForm}
      initialValue={async () => data.basic}
      buttonType='block'
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
      <Title level={3}>Basic details</Title>
      If you feel that your entry is correct and form is still showing error, please do report
      issue.
      {form}
    </div>
  );
};

export default BasicSignUp;
