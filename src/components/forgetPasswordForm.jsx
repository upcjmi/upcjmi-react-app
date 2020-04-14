import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';

class ForgetPasswordForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const {form, signIn} = this.props;
    const {validateFields} = form;
    validateFields((err, values) => {
      if (!err) {
        signIn(values.email);
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
        <br />
        <Form.Item>
          <Button
            htmlType='submit'
            className='login-form-button'
            type='primary'
            icon={inProgress ? 'loading' : 'link'}>
            Get Verification Link
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
