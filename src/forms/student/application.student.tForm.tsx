import {CAPTCHA, FORM_ELEMENT_TYPES} from '../../constants/formFields.constant';
import {get} from '../../helpers/function.helper';


export const applicationFormTemplate =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      label: 'Application',
      name: 'application',
      initialValue: get(initialValues, 'application', ''),
      type: FORM_ELEMENT_TYPES.MARKDOWN,
      rules: [
        {required: true},
        {
          validator: (rule: any, value: string, callback: any) => {
            if(value === get(initialValues, 'application', ''))
              callback('You need to fill in the application');

            callback();
          }
        }
      ],
    }, {
      ...CAPTCHA
    }
  ];
