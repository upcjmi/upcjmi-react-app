import React, {FC} from 'react';
import {Card, Typography} from 'antd';
import ForgetPasswordForm from '../components/forgetPasswordForm';

const {Title} = Typography;
interface IProps {}

const ForgetPassword: FC<IProps> = () => {
  return (
    <div className='full-page center-hv grey lighten-3'>
      <Card className='signinScreen-card'>
        <Title>Forget Password</Title>
        <ForgetPasswordForm />
      </Card>
    </div>
  );
};

export default ForgetPassword;
