import {CAPTCHA, FORM_ELEMENT_TYPES} from '../constants/formFields.constant';
import {get} from '../helpers/function.helper';


export const contactTemplateForm =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      label: 'Name',
      name: 'name',
      initialValue: get(initialValues, 'name'),
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [{required: true}],
    }, {
      label: 'Email',
      name: 'email',
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [{required: true, type: 'email'}],
    }, {
      label: 'Contact Number',
      name: 'phone',
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [
        {pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}
      ],
      kwargs: {
        addonBefore: '+91',
      },
    }, {
      label: 'You are',
      name: 'type',
      type: FORM_ELEMENT_TYPES.SELECT,
      rules: [{required: true}],
      options: {
        'S': 'Student',
        'C': 'Company repesentative',
        'V': 'Visitor',
      },
    }, {
      label: 'Question',
      name: 'question',
      type: FORM_ELEMENT_TYPES.TEXTAREA,
      kwargs: {
        placeholder: 'Ask your question in brief',
        autosize: {
          minRows: 3
        }
      },
      rules: [{required: true}],
    }, {
      ...CAPTCHA
    }
  ];
