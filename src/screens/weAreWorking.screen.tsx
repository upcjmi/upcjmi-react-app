import React, {FC} from 'react';
import {Typography} from 'antd';
// @ts-ignore
import WeAreWorkingSVG from 'assets/persons/we-are-working.png';

interface IProps {}

const {Title} = Typography;
const WeAreWorking: FC<IProps> = () => (
  <div className='full-page center-hv'>
    <div>
      <Title level={3}>We are working on it :)</Title>
      <br />
      <img src={WeAreWorkingSVG} alt='We are working' className='responsive-img' />
    </div>
  </div>
);

export default WeAreWorking;
