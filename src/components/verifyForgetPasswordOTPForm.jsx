import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';

class VerifyForgetPasswordOTPForm extends React.Component {
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

  render() {
    const {form, inProgress} = this.props;
    const {getFieldDecorator} = form;

    return (
      <Form onSubmit={this.handleSubmit} className='login-form' id='sign-in-form'>
        <Form.Item>
          {getFieldDecorator('otp', {
            rules: [
              {required: true, message: 'Please input your OTP!'},
              {type: 'otp', message: 'Enter a valid OTP!'},
            ],
          })(
            <Input
              prefix={<Icon type='lock' className='input-prefix' />}
              placeholder='Enter OTP!'
              type='otp'
              autoCapitalize='none'
              autoCorrect='off'
            />,
          )}
        </Form.Item>
        <br />
        <Form.Item>
          <Button
            htmlType='submit'
            className='login-form-button'
            type='primary'
            icon={inProgress ? 'loading' : 'tick'}>
            Verify
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

export default connect(mapStateToProps)(
  Form.create({name: 'forget-password'})(VerifyForgetPasswordOTPForm),
);
