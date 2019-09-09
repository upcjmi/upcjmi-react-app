import {lazy} from 'react';
import {IRoute} from '../types/common';
import {HOME_PATH} from './paths';

export const commonRoutes: Array<IRoute> = [
  {
    path: HOME_PATH,
    screen: lazy(() => import('../screens/home.screen')),
  },
];
