import {COURSES} from 'constants/formFields.constant';

export const coursesAddRecruitmentTForm = (
  state: any,
  initialValues: any,
  extraValues: any,
  form: any,
) => [
  {
    ...COURSES(initialValues, form),
  },
];
