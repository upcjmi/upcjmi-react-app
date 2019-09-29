import React, {FC} from 'react';
import {Typography} from 'antd';
import XLink from '../xLink';

import FormCreator from '../formCreator';
import {verificationDocumentTemplate} from '../../forms/signUp/verification.signUp.tForm';
import {ISignUpData} from '../../types/signUp.type';
import {PRIVACY_POLICY, TERMS_AND_CONDITION} from '../../constants/externalLinks.constant';

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
      By clicking on &quot;Create my account&quot; you agree to our
      <XLink href={TERMS_AND_CONDITION} newLine={false}> terms and conditions </XLink>
      and
      <XLink href={PRIVACY_POLICY} newLine={false}> privacy policy. </XLink>
      <br />
      We are tracking your activity for any suspicious or illegal activity.
      <br />
      <br />
      {form}
    </div>
  );
};

export default VerificationDocumentSignUp;
