import {FORM_ELEMENT} from 'constants/formFields.constant';
import {get} from 'helpers/function.helper';

const jobDetailsInitialValue = `TIP: Get a preview by clicking on _eye icon_ in the tool menu.
# ![Logo URL](http://bit.ly/2mHv0do) Company name
## Roles & Responsibilities
About a paragraph about this role.. or
- Better write in points
- **emphasize** some keyword

## Work culture
<iframe width="320" height="200" src="https://www.youtube.com/embed/kIpQvDsjHRg" 
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>

## Skills & Qualifications for this Role`;

const questionInitialValue = `## Why should you be hired for this job?
Space for answer...
## Tell about your achievements
Space for answer...

TIP: Write always give space for answers.`;

export const basicAddRecruitmentTForm = (
  state: any,
  initialValues: any,
  extraValues: any,
  form: any,
) => [
  {
    label: 'Title',
    name: 'title',
    initialValue: get(initialValues, 'title'),
    kwargs: {
      placeholder: 'ex: Junior Software Engineer',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Base Package (CTC)',
    name: 'package',
    initialValue: get(initialValues, 'package'),
    kwargs: {
      placeholder: 'ex: 25',
      addonBefore: 'Rs. ',
      addonAfter: 'LPA',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [
      {required: true},
      {
        pattern: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
        message: 'Not a valid package. Package can only be floating point numbers.',
      },
    ],
  },
  {
    label: 'Application open',
    name: 'open',
    initialValue: get(initialValues, 'open'),
    type: FORM_ELEMENT.DATE_TIME_PICKER,
    rules: [{required: true}],
    kwargs: {
      showTime: {format: 'h:mm a'},
      format: 'YYYY-MM-DD h:mm a',
    },
  },
  {
    label: 'Application ends',
    name: 'close',
    initialValue: get(initialValues, 'close'),
    type: FORM_ELEMENT.DATE_TIME_PICKER,
    rules: [{required: true}],
    kwargs: {
      showTime: {format: 'h:mm a'},
      format: 'YYYY-MM-DD h:mm a',
    },
  },
  {
    label: 'Questions required',
    name: 'application_required',
    initialValue: get(initialValues, 'application_required'),
    type: FORM_ELEMENT.SWITCH,
    help: 'Ask some basic question from candidates before application',
  },
  {
    label: 'Job Description',
    name: 'about',
    initialValue: get(initialValues, 'about', jobDetailsInitialValue),
    type: FORM_ELEMENT.MARKDOWN,
    rules: [{required: true}],
  },
  {
    label: form.getFieldValue('application_required') ? 'Questions' : '',
    name: 'application_format',
    initialValue: get(initialValues, 'application', questionInitialValue),
    type: form.getFieldValue('application_required') ? FORM_ELEMENT.MARKDOWN : FORM_ELEMENT.HIDDEN,
    rules: [{required: form.getFieldValue('application_required')}],
  },
];
