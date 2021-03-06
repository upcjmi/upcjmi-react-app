import {lazy} from 'react';
import {INavigation} from 'types/common.type';

export const signUpSteps: Array<INavigation> = [
  {
    title: 'Account',
    icon: 'user',
    component: lazy(() => import('components/student/signUp/account.signUp.student')),
  },
  {
    title: 'Basic Detail',
    icon: 'solution',
    component: lazy(() => import('components/student/signUp/basic.signUp.student')),
  },
  {
    title: 'Verification Document',
    icon: 'file-protect',
    component: lazy(() => import('components/student/signUp/verificationDocument.signUp.student')),
  },
  {
    title: 'Creating account',
    icon: 'user-add',
    component: lazy(() => import('components/student/signUp/creating.signUp.student')),
  },
];
