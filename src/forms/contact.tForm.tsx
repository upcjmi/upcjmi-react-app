import {CAPTCHA, FORM_ELEMENT} from 'constants/formFields.constant';
import {get} from 'helpers/function.helper';

export const contactTForm = (state: any, initialValues: any) => [
  {
    label: 'Name',
    name: 'name',
    initialValue: get(initialValues, 'name'),
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Email',
    name: 'email',
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true, type: 'email'}],
  },
  {
    label: 'Contact Number',
    name: 'phone',
    type: FORM_ELEMENT.INPUT,
    rules: [{pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
    kwargs: {
      addonBefore: '+91',
    },
  },
  {
    label: 'You are',
    name: 'type',
    type: FORM_ELEMENT.SELECT,
    rules: [{required: true}],
    options: {
      S: 'Student',
      C: 'Company representative',
      V: 'Visitor',
    },
  },
  {
    label: 'Question',
    name: 'question',
    type: FORM_ELEMENT.TEXTAREA,
    kwargs: {
      placeholder: 'Ask your question in brief',
      autosize: {
        minRows: 3,
      },
    },
    rules: [{required: true}],
  },
  {
    ...CAPTCHA,
  },
];
