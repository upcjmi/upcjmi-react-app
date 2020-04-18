import {lazy} from 'react';
import {IRoute} from 'types/common.type';
import {
  COMPANY_PORTAL_HOME_PATH,
  CONTACT_PATH,
  EMAIL_VERIFICATION_PATH,
  HOME_PATH,
  PORTAL_HOME_PATH,
  PRIVACY_POLICY_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  FORGET_PASSWORD_PATH,
  STUDENT_PORTAL_HOME_PATH,
  TERMS_AND_CONDITION_PATH,
} from './main.paths.constant';

export const COMMON_ROUTES: Array<IRoute> = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('screens/home.screen')),
  },
  {
    path: CONTACT_PATH,
    title: 'Contact Us',
    screen: lazy(() => import('screens/contact.screen')),
  },
  {
    path: PORTAL_HOME_PATH,
    title: 'Placement and Internship Portal Home',
    screen: lazy(() => import('screens/portal.screen')),
    exact: true,
  },
  {
    path: STUDENT_PORTAL_HOME_PATH,
    title: 'Student Portal',
    screen: lazy(() => import('screens/student/main.student.screen')),
    exact: false,
  },
  {
    path: COMPANY_PORTAL_HOME_PATH,
    title: 'Company Portal || University Placement Cell, Jamia Millia Islamia',
    screen: lazy(() => import('screens/company/main.company.screen')),
    exact: false,
  },
  {
    path: SIGN_IN_PATH,
    title: 'Sign In to UPC JMI Portal',
    screen: lazy(() => import('screens/signIn.screen')),
  },
  {
    path: SIGN_UP_PATH,
    title: 'Create new student account',
    screen: lazy(() => import('screens/student/signUp.student.screen')),
  },
  {
    path: FORGET_PASSWORD_PATH,
    title: 'Forget Password for student account',
    screen: lazy(() => import('screens/forgetPassword.screen')),
  },
  {
    path: TERMS_AND_CONDITION_PATH,
    title: 'Terms and Conditions',
    screen: lazy(() => import('screens/termsAndConditions.screen')),
  },
  {
    path: PRIVACY_POLICY_PATH,
    title: 'Privacy policy',
    screen: lazy(() => import('screens/privacyPolicy.screen')),
  },
  {
    path: EMAIL_VERIFICATION_PATH,
    title: 'Verify your email',
    screen: lazy(() => import('screens/emailVerification.screen')),
  },
];
