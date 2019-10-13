import React, {FC} from 'react';
import {Spin} from 'antd';

interface IProps {}

const LoadingComponentScreen: FC<IProps> = () => (
  <div className='full-height full-width center-hv'>
    <Spin size='large' tip='Loading...' />
  </div>
);

export default LoadingComponentScreen;
