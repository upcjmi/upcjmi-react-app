import {COURSES, FORM_ELEMENT, CAPTCHA} from 'constants/formFields.constant';
import {get} from 'helpers/function.helper';

export const basicSignUpTForm = (state: any, initialValues: any, extraValues: any, form: any) => [
  {
    label: 'Name',
    name: 'name',
    initialValue: get(initialValues, 'name'),
    kwargs: {
      placeholder: 'ex: Your Name',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Enrollment Number',
    name: 'enrollment_id',
    initialValue: get(initialValues, 'enrollment_id'),
    kwargs: {
      placeholder: 'ex: 18XXXXXX9',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [
      {required: true},
      {
        pattern: /^\d{6,9}$/,
        message: 'Enrollment number is not in valid pattern. ',
      },
    ],
  },
  {
    label: 'Roll Number',
    name: 'roll',
    initialValue: get(initialValues, 'roll'),
    kwargs: {
      placeholder: 'ex: 17BCEXXX',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [
      {required: true},
      {
        pattern: /(20)?\d{2}\w+\d{3}/,
        message: 'Roll number is not in valid pattern. ',
      },
    ],
  },
  {
    label: 'Student ID',
    name: 'student_id',
    initialValue: get(initialValues, 'student_id'),
    kwargs: {
      placeholder: 'ex: 2018XXXX',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [
      {required: true},
      {
        pattern: /^\d{8,9}$/,
        message: 'Not valid Student ID, normally Student ID is of 8 or 9 digit',
      },
    ],
  },
  {
    ...COURSES(initialValues, form),
  },
  {
    label: 'Year',
    name: 'year',
    initialValue: get(initialValues, 'year'),
    type: FORM_ELEMENT.SELECT,
    rules: [{required: true}],
    options: {
      '1': '1st year',
      '2': '2nd year',
      '3': '3rd year',
      '4': '4th year',
      '5': '5th year',
    },
    kwargs: {
      placeholder: '2nd year',
    },
  },
  {
    label: 'Number',
    name: 'phone_number',
    type: FORM_ELEMENT.INPUT,
    initialValue: get(initialValues, 'phone_number'),
    rules: [{required: true}, {pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
    kwargs: {
      addonBefore: '+91',
    },
  },
];

export const basicSignUpTFormCompany = (state: any, initialValues: any) => [
  {
    label: 'Your Name',
    name: 'user_name',
    initialValue: get(initialValues, 'user_name'),
    kwargs: {
      placeholder: 'ex: Username',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Company Name',
    name: 'name',
    initialValue: get(initialValues, 'name'),
    kwargs: {
      placeholder: 'ex: Company Name',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'About your company',
    name: 'about',
    initialValue: get(initialValues, 'about'),
    kwargs: {
      placeholder: 'ex: Company Details',
    },
    type: FORM_ELEMENT.TEXTAREA,
    rules: [{required: true}],
  },
  {
    ...CAPTCHA,
  },
];
