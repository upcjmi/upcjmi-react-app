import React, {FC} from 'react';
import {Typography} from 'antd';

interface IProps {}

const {Title} = Typography;

const TermsAndConditionsScreen: FC<IProps> = () => (
  <div className='container'>
    <Title>Terms and Condition</Title>
    This is yet to be updated
  </div>
);

export default TermsAndConditionsScreen;
