import {FORM_ELEMENT_TYPES, CAPTCHA} from '../../constants/formFields.constant';
import {get} from '../../helpers/function.helper';

export const verificationDocumentTemplate =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      label: 'Documents',
      name: 'verification_document',
      initialValue: get(initialValues.values, 'documents'),

      type: FORM_ELEMENT_TYPES.FILE_DRAG_DROP,
      rules: [
        {
          required: true,
        },
      ],
      kwargs: {
        multiple: true,
        help: 'Add verification documents',
        desc: 'Upload picture of your admit card and id card.',
      },
    },
    {
      ...CAPTCHA,
    },
  ];
