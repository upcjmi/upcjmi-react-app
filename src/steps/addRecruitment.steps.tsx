import {lazy} from 'react';
import {INavigation} from 'types/common.type';

export const addRecruitmentSteps: Array<INavigation> = [
  {
    title: 'Basic details',
    icon: 'solution',
    component: lazy(() => import('components/company/addRecruitment/basic.addRecruitment.company')),
  },
  {
    title: 'Rounds',
    icon: 'profile',
    component: lazy(() =>
      import('components/company/addRecruitment/rounds.addRecruitment.company'),
    ),
  },
  {
    title: 'Eligibility',
    icon: 'smile-o',
    component: lazy(() =>
      import('components/company/addRecruitment/eligibility.addRecruitment.company'),
    ),
  },
];
