export const FORM_ELEMENT_TYPES = {
  INPUT: 'input',
  INPUT_NUMBER: 'input-number',
  PASSWORD: 'password',
  TEXTAREA: 'textarea',
  MARKDOWN: 'markdown',
  SELECT: 'select',
  CAPTCHA: 'captcha',
  MONTH_PICKER: 'month-picker',
  FILE_DRAG_DROP: 'file-drag-drop',
  RANGE_PICKER: 'range-picker',
  RADIO: 'radio',
};

export const SUBMIT_FORM = 'SUBMIT_FORM';

export const CAPTCHA = {
  type: FORM_ELEMENT_TYPES.CAPTCHA,
  name: 'captcha',
  label: 'Captcha',
  rules: [
    {
      required: true,
      message: 'Please solve the captcha',
    },
  ],
};
