import React, {FC} from 'react';
import {Typography} from 'antd';

import FormCreator from 'components/formCreator';
import {ISignUpData} from 'types/signUp.type';
import {basicSignUpTForm} from 'forms/signUp/basic.signUp.tForm';

interface IProps {
  action: any;
  next: any;
  data: ISignUpData;
}

const {Title} = Typography;

const BasicSignUpStudent: FC<IProps> = ({action, data, next}: IProps) => {
  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={basicSignUpTForm}
      initialValue={async () => data.basic}
      buttonType='block'
      submitButtonText='Next'
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
      <br />
      <br />
      {form}
    </div>
  );
};

export default BasicSignUpStudent;
