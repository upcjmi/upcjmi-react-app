import {message} from 'antd';

import {FORM_ELEMENT_TYPES, CAPTCHA} from 'constants/formFields.constant';
import {get} from 'helpers/function.helper';
import {studentDocumentUploadURL} from 'helpers/api/file.api.helper';

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
        help: 'Upload Admit card and Student ID Card',
        desc: 'These documents will be manually verified by ' +
          'our student coordinators through your respective departments. \n' +
          'Only JPEG images less than 150kb are allowed',
        listType: 'picture',
        accept: 'image/jpeg',
        action: studentDocumentUploadURL(),
        beforeUpload: (file: any) => {
          const isJpgOrPng = file.type === 'image/jpeg';
          if (!isJpgOrPng) {
            message.error('You can only upload JPEG file!');
          }
          const isLt2M = file.size / 1024 < 150;
          if (!isLt2M) {
            message.error('Image must smaller than 150kb!');
          }
          return isJpgOrPng && isLt2M;
        }
      },
    },
    {
      ...CAPTCHA,
    },
  ];
