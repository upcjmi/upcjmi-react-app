import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';

class SignInForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const {form, signIn} = this.props;
    const {validateFields} = form;
    validateFields((err, values) => {
      if (!err) {
        signIn(values.email, values.password);
      }
    });
  };

  render() {
    const {form, inProgress} = this.props;
    const {getFieldDecorator} = form;

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
              prefix={<Icon type='user' className='input-prefix' />}
              placeholder='Email'
              type='email'
              autoComplete='username email'
              autoCapitalize='none'
              autoCorrect='off'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input
              prefix={<Icon type='lock' className='input-prefix' />}
              type='password'
              placeholder='Password'
              autoComplete='password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            className='login-form-button'
            type='primary'
            icon={inProgress ? 'loading' : 'login'}>
            Sign In
          </Button>
          <a className='login-form-forgot' href='/forget-password'>
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
