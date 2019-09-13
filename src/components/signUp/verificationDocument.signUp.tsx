import React, {FC} from 'react';
import {Typography} from 'antd';
import FormCreator from '../formCreator';
import {verificationDocumentTemplate} from '../../forms/signUp/verificationDocuments.form';

interface IProps {
  action: any;
  next: any;
}

const {Title} = Typography;

const VerificationDocumentSignUp: FC<IProps> = ({action}: IProps) => {
  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={verificationDocumentTemplate}
      title="Verification Document"
      onSubmit={(objForm: any) => {
        action(objForm.getFieldsValue()());
      }}
    />
  );

  return (
    <div>
      <Title>Verification Documents</Title>
      {form}
    </div>
  );
};

export default VerificationDocumentSignUp;
