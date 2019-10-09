import {lazy} from 'react';
import {IRoute, ISidebarRoute} from '../../types/common.type';

export const companySideRoutes: Array<ISidebarRoute> = [
  {
    name: 'Home',
    icon: 'home',
    path: '/',
    screen: lazy(() => import('screens/company/home.company.screen')),
  },
  {
    name: 'Recruitment',
    icon: 'appstore',
    path: '/recruitment/',
    screen: lazy(() => import('screens/company/recruitment.company.screen')),
  },
  {
    name: 'Internships',
    icon: 'rocket',
    path: '/internships/',
    screen: lazy(() => import('screens/company/internships.company.screen')),
  },
  {
    name: 'Account Settings',
    icon: 'setting',
    path: '/settings/',
    screen: lazy(() => import('screens/company/settings.company.screen')),
  },
];

export const companyExtraRoutes: Array<IRoute> = [
  {
    title: 'Add Recruitment',
    path: '/recruitment/add/',
    screen: lazy(() => import('screens/company/addRecruitment.company.screen')),
  },
];
