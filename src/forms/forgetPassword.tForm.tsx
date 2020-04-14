import {COURSES, FORM_ELEMENT} from '../constants/formFields.constant';
import {get} from '../helpers/function.helper';

export const forgetPasswordForm = (state: any, initialValues: any, extraValues: any, form: any) => [
  {
    label: 'Email',
    name: 'email',
    initialValue: get(initialValues, 'email'),
    kwargs: {
      placeholder: 'ex: faisalmanzer@gmail.com',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
];
