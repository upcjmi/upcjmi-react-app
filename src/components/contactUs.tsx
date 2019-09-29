import React, {FC, useState} from 'react';
import {Icon, Result} from 'antd';

import FormCreator from './formCreator';
import {contactTForm} from '../forms/contact.tForm';
import {contactFormAPI} from '../helpers/api/api.helper';
import {openNotificationWithIcon} from '../helpers/notification.helper';

interface IProps {
}

const ContactUs: FC<IProps> = () => {
  const [submitted, setSubmitted] = useState(false);

  if(submitted)
    return (
      <Result
        icon={<Icon type='smile' theme='twoTone' />}
        title='We received your question, we will reply you on your provided email.'
      />
    );

  return (
    // @ts-ignore
    <FormCreator
      formTemplate={contactTForm}
      submitButtonText='Submit your query'
      onSubmit={async (objFrom: any) => {
        try{
          await contactFormAPI(objFrom.getFieldsValue());
          setSubmitted(true)
        } catch (ee) {
          openNotificationWithIcon('error', ee.data.detail);
        }
      }}
    />
  );
};

export default ContactUs;
