import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';
import {IReduxState} from '../../reducers';
import {doesUserExistsAPI} from '../../helpers/api/api.helper';
import {ISignUpData} from '../../types/signUp.type';
import {get} from '../../helpers/function.helper';

interface IStateProps {
  form: any;
  signIn: any;
}

interface IProps extends IStateProps {
  onSubmit: any;
  data: ISignUpData;
}

const usernameValidator = async (rule: any, value: string, callback: any) => {
  const {exists} = await doesUserExistsAPI(value);
  if (exists) callback(`Email ${value} is associated with another account.`);

  callback();
};

class EmailSignUpForm extends React.Component<IProps> {
  handleSubmit: any = (e: Event) => {
    e.preventDefault();
    const {form, onSubmit} = this.props;
    const {validateFields} = form;
    validateFields((err: any, values: any) => {
      if (!err) {
        // do something
        onSubmit({
          ...values,
          type: 'E',
        });
      }
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const {form, data} = this.props;
    // eslint-disable-next-line react/prop-types
    const {getFieldDecorator, getFieldError, isFieldTouched} = form;

    // @ts-ignore
    return (
      <Form onSubmit={this.handleSubmit} className='login-form' id='sign-in-form'>
        <Form.Item hasFeedback>
          {getFieldDecorator('email', {
            initialValue: get(data.basic, 'email'),
            rules: [
              {required: true, message: 'Please input your email!'},
              {type: 'email', message: 'Enter a valid email!'},
              {validator: usernameValidator},
            ],
            validateTrigger: 'onBlur',
          })(
            // @ts-ignore
            <Input
              prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder='Email'
              type='email'
              autocomplete='username email'
              autocapitalize='none'
              autocorrect='off'
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            initialValue: get(data.basic, 'password'),
            rules: [
              {required: true, message: 'Please input your Password!'},
              {min: 8, message: 'Password should be minimum 8 characters.'},
            ],
          })(
            // @ts-ignore
            <Input
              prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}} />}
              type='password'
              placeholder='Password'
              autocomplete='new-password'
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('confirm-password', {
            rules: [
              {
                validator: (rule: any, value: string, callback: any) => {
                  if (value !== form.getFieldValue('password')) callback(true);

                  callback();
                },
                message: 'Passwords does not match',
              },
            ],
          })(
            // @ts-ignore
            <Input
              prefix={<Icon type='safety' style={{color: 'rgba(0,0,0,.25)'}} />}
              type='password'
              placeholder='Confirm Password'
              autocomplete='new-password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            disabled={
              !isFieldTouched('email') ||
              getFieldError('email') ||
              !isFieldTouched('password') ||
              getFieldError('password') ||
              !isFieldTouched('confirm-password') ||
              getFieldError('confirm-password')
            }>
            Next
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  inProgress: state.auth.inProgress,
});

export default connect(mapStateToProps)(Form.create({name: 'sign-in'})(EmailSignUpForm));
