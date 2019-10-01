import React, {FC} from 'react';
import {Card} from 'antd';

import SignInCard from '../components/signInCard';
import SEO from '../components/seo';

interface IProps {}

const SignInScreen: FC<IProps> = () => (
  <div className='full-page center-hv' style={{backgroundColor: '#EEEEEE'}}>
    <SEO title='Sign In' description='Sign In Screen' />
    <Card style={{maxWidth: '95vw', width: 450}}>
      <SignInCard />
    </Card>
  </div>
);

export default SignInScreen;
