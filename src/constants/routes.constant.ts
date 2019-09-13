import {lazy} from 'react';
import {IRoute} from '../types/common.type';
import {
  COMPANY_PORTAL_HOME_PATH,
  CONTACT_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from './paths.constant';

export const COMMON_ROUTES: Array<IRoute> = [
  {
    path: HOME_PATH,
    title: 'Welcome to University Placement Cell, Jamia Millia Islamia',
    screen: lazy(() => import('../screens/home.screen')),
  },
  {
    path: CONTACT_PATH,
    title: 'Contact US || UPC JMI',
    screen: lazy(() => import('../screens/contact.screen')),
  },
  {
    path: STUDENT_PORTAL_HOME_PATH,
    title: 'Student Home || UPC JMI',
    screen: lazy(() => import('../screens/student/home.student.screen')),
  },
  {
    path: COMPANY_PORTAL_HOME_PATH,
    title: 'Company Home || UPC JMI',
    screen: lazy(() => import('../screens/company/home.company.screen')),
  },
  {
    path: SIGN_IN_PATH,
    title: 'Sign In to UPC Portal',
    screen: lazy(() => import('../screens/signIn.screen')),
  },
  {
    path: SIGN_UP_PATH,
    title: 'Create new student account || UPC JMI',
    screen: lazy(() => import('../screens/signUp.screen')),
  },
];
