import {lazy} from 'react';
import {IRoute, ISidebarRoute} from 'types/common.type';

// const isProduction = process.env.NODE_ENV === 'production';
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
  // {
  //   name: 'Internships',
  //   icon: 'rocket',
  //   path: '/internships/',
  //   screen: isProduction
  //     ? lazy(() => import('screens/weAreWorking.screen'))
  //     : lazy(() => import('screens/company/internships.company.screen')),
  // },
  // {
  //   name: 'Account Settings',
  //   icon: 'setting',
  //   path: '/settings/',
  //   screen: isProduction
  //     ? lazy(() => import('screens/weAreWorking.screen'))
  //     : lazy(() => import('screens/company/settings.company.screen')),
  // },
];

export const companyExtraRoutes: Array<IRoute> = [
  {
    title: 'Add Recruitment',
    path: '/recruitment/add/',
    screen: lazy(() => import('screens/company/addRecruitment.company.screen')),
  },
  {
    title: 'Recruitment details',
    path: '/recruitment/:id/',
    screen: lazy(() => import('screens/company/recruitmentDetail.company.screen')),
  },
];
