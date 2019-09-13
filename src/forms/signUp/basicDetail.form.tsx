import React, {FC} from 'react';

import {Input, Form, Button, Select} from 'antd';

interface IProps {
  form: any;
  onSubmit: any;
}

const BasicDetailForm: FC<IProps> = ({form, onSubmit}: IProps) => {
  const handleSubmit: any = (e: Event) => {
    e.preventDefault();
    const {validateFields} = form;
    validateFields((err: any, values: any) => {
      if (!err) {
        // do something
        onSubmit(values);
      }
    });
  };

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
        <Form.Item label="Full Name" hasFeedback>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please give your full name.',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Roll Number" hasFeedback>
          {getFieldDecorator('roll', {
            rules: [
              {
                required: true,
                message: 'Give your university roll number.',
              },
            ],
          })(<Input placeholder="ex: 17BCE064" />)}
        </Form.Item>

        <Form.Item label="Course" hasFeedback>
          {getFieldDecorator('course', {
            rules: [
              {
                required: true,
                message: 'Course is mandatory.',
              },
            ],
          })(<Input placeholder="ex: B.Tech. Civil" />)}
        </Form.Item>

        <Form.Item label="Year" hasFeedback>
          {getFieldDecorator('year', {
            rules: [
              {
                required: true,
                message: 'Year is mandatory.',
              },
            ],
          })(
            <Select>
              <Select.Option value={1}>1st year</Select.Option>
              <Select.Option value={2}>2nd year</Select.Option>
              <Select.Option value={3}>3rd year</Select.Option>
              <Select.Option value={4}>4th year</Select.Option>
              <Select.Option value={5}>5th year</Select.Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Mobile Number">
          {getFieldDecorator('phone', {
            rules: [
              {min: 10, max: 10, message: 'Please enter a valid Indian number'},
              {required: true, message: 'Phone Number is mandatory.'},
            ],
          })(<Input type="number" addonBefore={['+91']} style={{width: '100%'}} />)}
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: {span: 24},
          }}>
          <Button type="primary" style={{width: '100%'}} onClick={handleSubmit}>
            Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Form.create({name: 'contact'})(BasicDetailForm);
