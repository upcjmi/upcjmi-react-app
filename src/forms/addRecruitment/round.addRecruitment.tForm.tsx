import {FORM_ELEMENT} from 'constants/formFields.constant';
import {get} from 'helpers/function.helper';

export const roundAddRecruitmentTForm = (state: any, initialValues: any) => [
  {
    label: 'Title',
    name: 'title',
    initialValue: get(initialValues, 'title'),
    kwargs: {
      placeholder: 'ex: Coding round',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Description',
    name: 'details',
    initialValue: get(initialValues, 'details'),
    type: FORM_ELEMENT.TEXTAREA,
    kwargs: {
      placeholder: 'ex: Online test for basic coding questions',
    },
    rules: [{required: true}],
  },
  {
    label: 'Starts on',
    name: 'start_end',
    initialValue: get(initialValues, 'start_end'),
    type: FORM_ELEMENT.RANGE_PICKER,
    rules: [{required: true}],
    kwargs: {
      showTime: {format: 'h:mm a'},
      format: 'YYYY-MM-DD h:mm a',
    },
  },
];
