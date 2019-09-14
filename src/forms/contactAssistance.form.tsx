import React, {FC} from 'react';

import {Input, Form, Button} from 'antd';

interface IProps {
  form: {
    getFieldDecorator: any;
  };
}

const {TextArea} = Input;
const wrapperCol = {
  xs: {span: 24, offset: 0},
  sm: {span: 16, offset: 8},
};

const ContactAssistanceForm: FC<IProps> = ({form}: IProps) => {
  const {getFieldDecorator} = form;
  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 8},
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 16},
    },
  };

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Form {...formItemLayout}>
        <Form.Item label='Name' hasFeedback>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'We need you name to assist you. Please enter your name.',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label='Email' hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message:
                  'We prefer email communication, providing email is mandatory. ' +
                  'Please enter your email.',
              },
              {
                type: 'email',
                message: 'Please enter valid email address.',
              },
            ],
          })(<Input type='email' />)}
        </Form.Item>

        <Form.Item label='Mobile Number'>
          {getFieldDecorator('phone', {
            rules: [{min: 10, max: 10, message: 'Please enter a valid Indian number'}],
          })(<Input type='number' addonBefore={['+91']} style={{width: '100%'}} />)}
        </Form.Item>

        <Form.Item wrapperCol={wrapperCol}>
          {getFieldDecorator('question', {
            rules: [
              {
                required: true,
                message: 'We need your question to help you. Please enter your question.',
              },
            ],
          })(<TextArea placeholder='Ask your question in detail.' autosize={{minRows: 3}} />)}
        </Form.Item>

        <Form.Item wrapperCol={wrapperCol}>
          <Button type='primary'>Submit your query</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Form.create({name: 'contact'})(ContactAssistanceForm);
