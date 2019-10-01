import {CAPTCHA} from 'constants/formFields.constant';


export const captchaFormTemplate =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      ...CAPTCHA
    }
  ];
