import React, {FC} from 'react';
import {Card} from 'antd';

import SignInCard from '../components/signInCard';

interface IProps {}

const SignInScreen: FC<IProps> = () => (
  <div className='full-page center-hv' style={{backgroundColor: '#EEEEEE'}}>
    <Card style={{maxWidth: '100vw', width: 450}}>
      <SignInCard />
    </Card>
  </div>
);

export default SignInScreen;
