import {FORM_ELEMENT_TYPES, CAPTCHA} from '../../constants/formFields.constant';
import {get} from '../../helpers/function.helper';

export const verificationDocumentTemplate =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      label: 'Documents',
      name: 'documents',
      initialValue: get(initialValues.values, 'documents'),

      type: FORM_ELEMENT_TYPES.FILE_DRAG_DROP,
      rules: [
        {
          required: true,
        },
      ],
      kwargs: {
        multiple: true,
        help: 'Upload picture of your Admit card and Student ID Card',
        desc: 'These documents will be manually verified by ' +
          'our student coordinators through your respective departments.',
      },
    },
    {
      ...CAPTCHA,
    },
  ];
