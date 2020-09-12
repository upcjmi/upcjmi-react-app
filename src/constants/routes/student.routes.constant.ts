import {lazy} from 'react';
import {IRoute, ISidebarRoute} from 'types/common.type';

const isProduction = process.env.NODE_ENV === 'production';
export const studentSideRoutes: Array<ISidebarRoute> = [
  {
    name: 'Home',
    icon: 'home',
    path: '/',
    screen: lazy(() => import('screens/student/home.student.screen')),
  },
  {
    name: 'Recruitment',
    icon: 'appstore',
    path: '/recruitment/',
    screen: lazy(() => import('screens/student/recruitment.student.screen')),
  },
  // {
  //   name: 'Internships',
  //   icon: 'rocket',
  //   path: '/internships/',
  //   screen: isProduction
  //     ? lazy(() => import('screens/weAreWorking.screen'))
  //     : lazy(() => import('screens/student/internships.student.screen')),
  // },
  {
    name: 'Courses',
    icon: 'book',
    path: '/courses/',
    screen: lazy(() => import('screens/student/courses.student.screen')),
  },
  // {
  //   name: 'Your Resume',
  //   icon: 'solution',
  //   path: '/resume/',
  //   screen:  lazy(() => import('../../screens/student/resume.student.screen')),
  // },
  // {
  //   name: 'Account Settings',
  //   icon: 'setting',
  //   path: '/settings/',
  //   screen: isProduction
  //     ? lazy(() => import('screens/weAreWorking.screen'))
  //     : lazy(() => import('../../screens/student/settings.student.screen')),
  // },
];

export const studentExtraRoutes: Array<IRoute> = [
  {
    title: 'Job Details',
    path: '/company/:company/job/:job/',
    screen: lazy(() => import('../../screens/student/recruitmentDetails.student.screen')),
  },
  {
    title: 'Course details',
    path: '/courses/:course/',
    screen: lazy(() => import('../../screens/student/courseDetails.student.screen')),
  },
];
