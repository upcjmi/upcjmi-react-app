import {FORM_ELEMENT_TYPES} from '../constants/formFields.constant';

export const emailVerificationTForm =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      name: 'vemail',
      label: 'You Email',
      type: FORM_ELEMENT_TYPES.INPUT
    }
  ];
