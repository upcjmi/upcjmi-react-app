import {lazy} from 'react';
import {ISidebarRoute} from '../types/common.type';

export const studentSideRoutes: Array<ISidebarRoute> = [
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
    name: 'Courses',
    icon: 'book',
    path: '/courses/',
    screen: lazy(() => import('../screens/student/courses.student.screen'))
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

export const studentRoutes = [
  {
    name: 'Job Details',
    path: '/company/:company/job/:job/',
    screen: lazy(() => import('../screens/student/jobDetails.student.screen'))
  }, {
    name: 'Course details',
    path: '/courses/:course/',
    screen: lazy(() => import('../screens/student/courseDetails.student.screen'))
  }
];
