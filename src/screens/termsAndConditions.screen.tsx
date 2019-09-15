import React, {FC} from 'react';
import {Typography} from 'antd';

interface IProps {
}

const {Title} = Typography;

// eslint-disable-next-line no-unused-vars
const TermsAndConditionsScreen: FC<IProps> = (props: IProps) => (
  <div className='container'>
    <Title>
      Terms and Condition
    </Title>
    This is yet to be updated
  </div>
);

export default TermsAndConditionsScreen;
