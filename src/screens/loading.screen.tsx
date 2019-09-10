import React, {FC} from 'react';
import {Spin} from 'antd';

import '../styles/loadingScreen.scss';

interface IProps {}

const LoadingScreen: FC<IProps> = () => (
  <div className="loading-screen">
    <Spin size="large" tip="Loading..." />
  </div>
);

export default LoadingScreen;
