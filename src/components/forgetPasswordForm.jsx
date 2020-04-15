import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';

class ForgetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldGetOTP: true,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {form, signIn} = this.props;
    const {validateFields} = form;
    validateFields((err, values) => {
      if (!err) {
        // signIn(values.email);
      }
    });
  };

  getOTP = () => {
    this.setState(
      {
        shouldGetOTP: false,
      },
      () => {
        setTimeout(() => {
          this.setState({
            shouldGetOTP: true,
          });
        }, 5000);
      },
    );
  };

  render() {
    const {form, inProgress} = this.props;
    const {shouldGetOTP} = this.state;
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
        <br />
        <Form.Item>
          {getFieldDecorator('otp', {
            rules: [
              {required: true, message: 'Please input your OTP!'},
              {type: 'otp', message: 'Enter a valid OTP!'},
            ],
          })(
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Input
                prefix={<Icon type='safety' className='input-prefix' />}
                placeholder='OTP'
                type='otp'
                autoCapitalize='none'
                autoCorrect='off'
              />
              <Button
                onClick={this.getOTP}
                type='link'
                disabled={!shouldGetOTP}
                icon={inProgress ? 'loading' : 'link'}>
                Get OTP
              </Button>
            </div>,
          )}
        </Form.Item>
        <br />
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {required: true, message: 'Please input your password!'},
              {type: 'email', message: 'Enter a valid password!'},
            ],
          })(
            <Input
              prefix={<Icon type='lock' className='input-prefix' />}
              placeholder='Password'
              type='password'
              secureInput
              autoCapitalize='none'
              autoCorrect='off'
            />,
          )}
        </Form.Item>
        <br />
        <Form.Item>
          {getFieldDecorator('verifyPassword', {
            rules: [
              {required: true, message: 'Please input your verify password!'},
              {type: 'email', message: 'Enter a valid verify password!'},
            ],
          })(
            <Input
              prefix={<Icon type='lock' className='input-prefix' />}
              placeholder='Verify Password'
              type='verifyPassword'
              autoCapitalize='none'
              autoCorrect='off'
            />,
          )}
        </Form.Item>
        <br />
        <br />
        <Form.Item>
          <Button
            htmlType='submit'
            className='login-form-button'
            type='primary'
            icon={inProgress ? 'loading' : null}>
            Change Password
          </Button>
          <br />
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  inProgress: state.auth.inProgress,
});

export default connect(mapStateToProps)(Form.create({name: 'forget-password'})(ForgetPasswordForm));
