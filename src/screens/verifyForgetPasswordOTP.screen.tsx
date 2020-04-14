import React, {FC} from 'react';
import {Card, Typography} from 'antd';
import VerifyForgetPasswordOTPForm from '../components/verifyForgetPasswordOTPForm';

const {Title} = Typography;
interface IProps {}

const VerifyOTP: FC<IProps> = () => {
  return (
    <div className='full-page center-hv grey lighten-3'>
      <Card className='signinScreen-card'>
        <Title>Verify OTP</Title>
        <VerifyForgetPasswordOTPForm />
      </Card>
    </div>
  );
};

export default VerifyOTP;
