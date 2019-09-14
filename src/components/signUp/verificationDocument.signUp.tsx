import React, {FC} from 'react';
import {Typography} from 'antd';
import FormCreator from '../formCreator';
import {verificationDocumentTemplate} from '../../forms/signUp/verification.templateForm';
import {ISignUpData} from '../../types/signUp.type';

interface IProps {
  action: any;
  next: any;
  data: ISignUpData;
}

const {Title} = Typography;

const VerificationDocumentSignUp: FC<IProps> = ({action, data, next}: IProps) => {
  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={verificationDocumentTemplate}
      title='Verification Document'
      formLayout={{}}
      submitButtonText='Create My Account'
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
      <Title>Verification Documents</Title>
      By clicking on &quot;Create my account&quot; you aggree to our terms and conditions and
      privacy policy.
      <br />
      We are tracking your activity for any suspicious or illegal activity.
      {form}
    </div>
  );
};

export default VerificationDocumentSignUp;
