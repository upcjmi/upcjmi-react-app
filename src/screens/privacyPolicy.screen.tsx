import React, {FC} from 'react';
import {Typography} from 'antd';

interface IProps {}

const {Title} = Typography;

const PrivacyPolicyScreen: FC<IProps> = () => (
  <div className='container'>
    <Title>Privacy Policy</Title>
    This is yet to be updated
  </div>
);

export default PrivacyPolicyScreen;
