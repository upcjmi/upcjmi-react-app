import React, {FC} from 'react';
import {Card} from 'antd';

import SignInCard from 'components/signInCard';

interface IProps {}

const SignInScreen: FC<IProps> = () => (
  <div className='full-page center-hv grey lighten-3'>
    <Card className='signinScreen-card'>
      <SignInCard />
    </Card>
  </div>
);

export default SignInScreen;
