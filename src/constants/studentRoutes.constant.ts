import {lazy} from 'react';
import {ISidebarRoute} from '../types/common.type';

export const studentRoutes: Array<ISidebarRoute> = [
  {
    name: 'Home',
    icon: 'home',
    path: '/',
    screen: lazy(() => import('../screens/student/home.student.screen'))
  }, {
    name: 'Recruitment',
    icon: 'appstore',
    path: '/recruitment/',
    screen: lazy(() => import('../screens/student/recruitment.student.screen'))
  }, {
    name: 'Internships',
    icon: 'rocket',
    path: '/internships/',
    screen: lazy(() => import('../screens/student/internships.student.screen'))
  }, {
    name: 'Your Resume',
    icon: 'solution',
    path: '/resume/',
    screen: lazy(() => import('../screens/student/resume.student.screen'))
  }, {
    name: 'Account Settings',
    icon: 'setting',
    path: '/settings/',
    screen: lazy(() => import('../screens/student/settings.student.screen'))
  }
];
