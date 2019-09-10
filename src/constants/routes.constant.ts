import {lazy} from 'react';
import {IRoute} from '../types/common';
import {CONTACT_PATH, HOME_PATH} from './paths.constant';

export const COMMON_ROUTES: Array<IRoute> = [
  {
    path: HOME_PATH,
    screen: lazy(() => import('../screens/home.screen')),
  },
  {
    path: CONTACT_PATH,
    screen: lazy(() => import('../screens/contact.screen')),
  },
];
