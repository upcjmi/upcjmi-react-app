import {get} from '../helpers/function.helper';
import {getCourse} from '../helpers/courses';
import {allCoursesOption} from './allOfferedCourses';

export const FORM_ELEMENT = {
  INPUT: 'input',
  INPUT_NUMBER: 'input-number',
  PASSWORD: 'password',
  TEXTAREA: 'textarea',
  MARKDOWN: 'markdown',
  SELECT: 'select',
  CAPTCHA: 'captcha',
  DATE_TIME_PICKER: 'date-time-picker',
  MONTH_PICKER: 'month-picker',
  FILE_DRAG_DROP: 'file-drag-drop',
  RANGE_PICKER: 'range-picker',
  RADIO: 'radio',
  SWITCH: 'switch',
  HIDDEN: 'hidden',
  CASCADER: 'cascader',
};

export const SUBMIT_FORM = 'SUBMIT_FORM';

export const CAPTCHA = {
  type: FORM_ELEMENT.CAPTCHA,
  name: 'captcha',
  label: 'Captcha',
  rules: [
    {
      required: process.env.NODE_ENV === 'production',
      message: 'Please solve the captcha',
    },
  ],
};

export const COURSES = (initialValues: any, form: any) => ({
  label: 'Course',
  name: 'course',
  initialValue: (() => {
    const hash = get(initialValues, 'course');
    if (hash) {
      const course = getCourse(hash);
      course[2] = hash;
      return course;
    }

    return hash;
  })(),
  kwargs: {
    placeholder: 'ex: Undergraduate / B.Tech. / Civil Engineering',
    options: allCoursesOption,
    onChange: (value: Array<string>) => {
      form.setFieldsValue({course: value[2]});
    },
  },
  type: FORM_ELEMENT.CASCADER,
  rules: [{required: true}],
});
