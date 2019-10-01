import {FORM_ELEMENT_TYPES} from 'constants/formFields.constant';


const jobDetailsInitialValue = `TIP: Get a preview by clicking on _eye icon_ in the tool menu.
# ![Logo URL](http://bit.ly/2mHv0do) Company name
## Roles & Responsibilities
About a paragraph about this role.. or
- Better write in points
- **emphasize** some keyword

## Work culture
<iframe width="320" height="200" src="https://www.youtube.com/embed/kIpQvDsjHRg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Skills & Qualifications for this Role
Oh typoo here will be marked as red 😀`;

const questionInitialValue = `## Why should you be hired for this job?
Space for answer...
## Tell about your achievements
Space for answer...

TIP: Write always give space for answers.`;

export const basicAddRecruitmentTForm =
  // eslint-disable-next-line no-unused-vars
  (state: any, initialValues: any, extraValues: any, form: any) => [
    {
      label: 'Title',
      name: 'title',
      kwargs: {
        placeholder: 'ex: Junior Software Engineer',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [{required: true}],
    },
    {
      label: 'Base Package',
      name: 'package',
      kwargs: {
        placeholder: 'ex: 25LPA',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      rules: [
        {required: true},
      ],
    },

    {
      label: 'Questions required',
      name: 'application_required',
      type: FORM_ELEMENT_TYPES.SWITCH,
      help: 'Ask some basic question from candidates before application'
    },
    {
      label: 'Job Description',
      name: 'about',
      initialValue: jobDetailsInitialValue,
      type: FORM_ELEMENT_TYPES.MARKDOWN,
      rules: [
        {required: true},
      ],
    }, {
      label: form.getFieldValue('application_required')? 'Questions' : '',
      name: 'application',
      initialValue: questionInitialValue,
      type: form.getFieldValue('application_required')?
        FORM_ELEMENT_TYPES.MARKDOWN : FORM_ELEMENT_TYPES.HIDDEN,
      rules: [
        {required: form.getFieldValue('application_required')},
      ],
    },
  ];
