import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';

class SignInForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    const {form, signIn} = this.props;
    // eslint-disable-next-line react/prop-types
    const {validateFields} = form;
    validateFields((err, values) => {
      if (!err) {
        signIn(values.email, values.password);
      }
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const {form, inProgress} = this.props;
    // eslint-disable-next-line react/prop-types
    const {getFieldDecorator, getFieldError, isFieldTouched} = form;

    return (
      <Form onSubmit={this.handleSubmit} className='login-form' id='sign-in-form'>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {required: true, message: 'Please input your email!'},
              {type: 'email', message: 'Enter a valid email!'},
            ],
          })(
            <Input
              prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder='Email'
              type='email'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input
              prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}} />}
              type='password'
              placeholder='Password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            className='login-form-button'
            icon={inProgress ? 'loading' : 'login'}
            disabled={
              inProgress ||
              !isFieldTouched('email') ||
              getFieldError('email') ||
              !isFieldTouched('password') ||
              getFieldError('password')
            }>
            Sign In
          </Button>
          <a className='login-form-forgot' href='#!'>
            Forgot password
          </a>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  inProgress: state.auth.inProgress,
});

export default connect(mapStateToProps)(Form.create({name: 'sign-in'})(SignInForm));
