import {FORM_ELEMENT_TYPES} from '../../constants/formFields.constant';
import {get} from '../../helpers/function.helper';

export const basicTemplateForm =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      label: 'Name',
      name: 'name',
      initialValue: get(initialValues, 'name'),
      kwargs: {
        placeholder: 'ex: Faisal Manzer',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [{required: true}],
    },
    {
      label: 'Roll number',
      name: 'roll',
      initialValue: get(initialValues, 'roll'),
      kwargs: {
        placeholder: 'ex: 17BCE064',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
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
      initialValue: get(initialValues, 'student'),
      kwargs: {
        placeholder: 'ex: 20177089',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [
        {required: true},
        {
          max: 9,
          min: 8,
          message: 'Normally student id is of 8 or 9 digit',
        },
      ],
    },
    {
      label: 'Course',
      name: 'course',
      initialValue: get(initialValues, 'course'),
      kwargs: {
        placeholder: 'ex: B.Tech. Civil',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [{required: true}],
    },
    {
      label: 'Year',
      name: 'year',
      initialValue: get(initialValues, 'year') || '2',
      type: FORM_ELEMENT_TYPES.SELECT,
      kwargs: {
        placeholder: 'ex: 2nd year',
      },
      rules: [{required: true}],
      options: {
        '1': '1st year',
        '2': '2nd year',
        '3': '3rd year',
        '4': '4th year',
        '5': '5th year',
      },
    },
    {
      label: 'Number',
      name: 'phone_number',
      initialValue: get(initialValues, 'phone_number'),
      rules: [
        {
          min: 10,
          max: 10,
          message: 'Not a Valid Indian Phone Number',
        },
        {required: true},
      ],
      kwargs: {
        addonBefore: '+91',
      },
    },
  ];
