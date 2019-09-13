import React, {FC} from 'react';
import {Typography} from 'antd';
import GoogleSignUpButton from '../googleSignUpButton';
import EmailSignUpForm from '../../forms/signUp/emailSignUp.form';
import {doesUserExistsAPI} from '../../helpers/api/api.helper';
import {userExistsWithThisEmail} from '../../helpers/notification.helper';

interface IProps {
  action: any;
  next: any;
  data: any;
}

const {Title} = Typography;

const AccountSignUp: FC<IProps> = ({action, data, next}: IProps) => {
  const saveData = async (signInData: any) => {
    const {exists} = await doesUserExistsAPI(signInData.email);
    if (!exists) {
      action(signInData);
      next();
    } else {
      userExistsWithThisEmail(signInData.email);
    }
  };

  // @ts-ignore
  const SignUpForm = <EmailSignUpForm onSubmit={saveData} data={data} />;
  // @ts-ignore
  const GoogleSignUp = <GoogleSignUpButton onSignInSuccess={saveData} />;

  return (
    <div>
      <Title level={3}>Account</Title>
      {GoogleSignUp}
      <br />
      <br />

      <div style={{textAlign: 'center'}}>OR</div>
      <br />
      {SignUpForm}
    </div>
  );
};

export default AccountSignUp;
