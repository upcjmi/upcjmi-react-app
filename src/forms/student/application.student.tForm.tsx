import {CAPTCHA, FORM_ELEMENT} from 'constants/formFields.constant';
import {get} from 'helpers/function.helper';

export const applicationFormTemplate = (state: any, initialValues: any) => [
  {
    label: 'Application',
    name: 'application',
    initialValue: get(initialValues, 'application', ''),
    type: FORM_ELEMENT.MARKDOWN,
    rules: [
      {required: true},
      {
        validator: (rule: any, value: string, callback: any) => {
          if (value === get(initialValues, 'application', ''))
            callback('You need to fill in the application');

          callback();
        },
      },
    ],
  },
  {
    ...CAPTCHA,
  },
];
