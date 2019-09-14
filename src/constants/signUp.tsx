import {lazy} from 'react';

interface INavigation {
  title: string;
  icon: string;
  component: any;
}

export const signUpNavigation: Array<INavigation> = [
  {
    title: 'Account',
    icon: 'user',
    component: lazy(() => import('../components/signUp/account.signUp')),
  },
  {
    title: 'Basic Detail',
    icon: 'solution',
    component: lazy(() => import('../components/signUp/basic.signUp')),
  },
  {
    title: 'Verification Document',
    icon: 'file-protect',
    component: lazy(() => import('../components/signUp/verificationDocument.signUp')),
  },
  {
    title: 'Creating account',
    icon: 'user-add',
    component: lazy(() => import('../components/signUp/creating.signUp')),
  },
];
