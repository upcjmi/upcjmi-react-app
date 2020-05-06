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
    component: lazy(() => import('components/company/signUp/basic.signUp.company')),
  },
  {
    title: 'Creating account',
    icon: 'user-add',
    component: lazy(() => import('components/company/signUp/creating.signUp.company')),
  },
];
