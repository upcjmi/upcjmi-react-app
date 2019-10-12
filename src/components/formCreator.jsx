/* eslint-disable */
import React, {Component} from 'react';

import {
  Button,
  Form,
  Input,
  Select,
  Tooltip,
  Icon,
  DatePicker,
  Upload,
  Radio,
  InputNumber,
  Row,
  Col,
  Switch,
  Cascader,
} from 'antd';
import {connect} from 'react-redux';

import SimpleMDE from 'react-simplemde-editor';
import {FORM_ELEMENT_TYPES} from '../constants/formFields.constant';

import 'easymde/dist/easymde.min.css';
import {openNotificationWithIcon} from '../helpers/notification.helper';
import ReCAPTCHA from 'react-google-recaptcha';
import {GOOGLE_RECAPTCHA_KEY} from '../constants/credentials.constant';
import {getFileHandlerURL, removeFileFromServer} from '../helpers/api/file.api.helper';

const {MonthPicker, RangePicker} = DatePicker;

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const blockFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const blockElements = [
  FORM_ELEMENT_TYPES.MARKDOWN,
  FORM_ELEMENT_TYPES.CASCADER,
  FORM_ELEMENT_TYPES.TEXTAREA,
  FORM_ELEMENT_TYPES.FILE_DRAG_DROP,
  FORM_ELEMENT_TYPES.CAPTCHA,
];

class FormCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValues: {},
      loaded: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {form, onSubmit} = this.props;
    const {validateFields} = form;

    validateFields(err => {
      if (!err) onSubmit(form);
      else openNotificationWithIcon('error', 'Please Correct the error displayed in forms.');
    });
  };

  componentDidMount() {
    const {initialValue} = this.props;
    if (initialValue)
      initialValue()
        .then(data => {
          this.setState({
            initialValues: data,
            loaded: true,
          });
        })
        .catch(error => {
          console.log(error);
        });
  }

  render() {
    const {getFieldDecorator, setFieldsValue, getFieldValue} = this.props.form;
    const {
      onCancel,
      state,
      extraData,
      initialValue,
      submitButtonText,
      cancelButtonText,
      buttonType,
      formLayout = formItemLayout,
    } = this.props;
    let {formTemplate} = this.props;
    const {loaded} = this.state;

    if (!loaded && initialValue) return 'Loading...';

    if (typeof formTemplate === 'function') {
      formTemplate = formTemplate(state, this.state.initialValues, extraData, this.props.form);
    }

    const buttonPlacement = buttonType === 'block' ? blockFormItemLayout : tailFormItemLayout;

    return (
      <Form onSubmit={this.handleSubmit} {...formLayout}>
        {formTemplate.map((formItem, index) => {
          const {label, name, help, kwargs, type, desc, ...fieldOptions} = formItem;
          const element = type;

          let itemInput = null;
          let extraComponent = null;

          switch (element) {
            case FORM_ELEMENT_TYPES.CAPTCHA:
              const changeValue = (value = '') =>
                setFieldsValue({
                  captcha: value,
                });
              extraComponent = (
                <ReCAPTCHA
                  sitekey={GOOGLE_RECAPTCHA_KEY}
                  onChange={changeValue}
                  onExpired={() => changeValue()}
                  onErrored={() => changeValue()}
                />
              );
              itemInput = <input type="hidden" value={getFieldValue('captcha')} />;
              break;
            case FORM_ELEMENT_TYPES.INPUT:
              itemInput = <Input {...kwargs} />;
              break;
            case FORM_ELEMENT_TYPES.INPUT_NUMBER:
              itemInput = <InputNumber {...kwargs} />;
              break;
            case FORM_ELEMENT_TYPES.MARKDOWN:
              itemInput = (
                <SimpleMDE
                  onChange={value => {
                    document.getElementById(name).innerText = value;
                  }}
                />
              );
              break;
            case FORM_ELEMENT_TYPES.SELECT:
              const options = [];
              Object.keys(formItem.options).forEach((key, index) => {
                options.push(
                  <Select.Option
                    key={index.toString()}
                    value={key}
                    children={formItem.options[key]}
                  />,
                );
              });
              itemInput = <Select {...kwargs}>{options}</Select>;
              break;
            case FORM_ELEMENT_TYPES.RADIO:
              const options1 = [];
              Object.keys(formItem.options).forEach((key, index) => {
                options1.push(
                  <Radio key={index.toString()} value={key} children={formItem.options[key]}>
                    {key}
                  </Radio>,
                );
              });
              itemInput = <Radio.Group>{options1}</Radio.Group>;
              break;
            case FORM_ELEMENT_TYPES.PASSWORD:
              itemInput = <Input.Password {...kwargs} />;
              break;
            case FORM_ELEMENT_TYPES.MONTH_PICKER:
              itemInput = (
                <MonthPicker
                  {...kwargs}
                  format="MM/YYYY"
                  // defaultValue={moment(kwargs['value'], kwargs['format'])}
                />
              );
              break;
            case FORM_ELEMENT_TYPES.RANGE_PICKER:
              itemInput = (
                <RangePicker
                  {...kwargs}
                  format="YYYY-MM-DD"
                  // defaultValue={moment(kwargs['value'], kwargs['format'])}
                />
              );
              break;
            case FORM_ELEMENT_TYPES.TEXTAREA:
              itemInput = <Input.TextArea {...kwargs} />;
              break;
            case FORM_ELEMENT_TYPES.FILE_DRAG_DROP:
              extraComponent = (
                <Upload.Dragger
                  action={getFileHandlerURL()}
                  data={file => ({
                    upload_id: file.uid,
                  })}
                  onRemove={file =>
                    file.response ? removeFileFromServer(file.response.identifier, file.uid) : true
                  }
                  onChange={obj => {
                    const files = [];
                    obj.fileList.map(file => {
                      files.push({
                        upload_id: file.uid,
                        identifier: file.response ? file.response.identifier : '',
                      });
                      return '';
                    });
                    setFieldsValue({
                      [name]: files,
                    });
                  }}
                  {...kwargs}>
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">{kwargs.help}</p>
                  <p className="ant-upload-hint">{kwargs.desc}</p>
                </Upload.Dragger>
              );
              fieldOptions.initialValue = '';
              itemInput = <input type="hidden" value={getFieldValue(name)} />;
              break;
            case FORM_ELEMENT_TYPES.SWITCH:
              itemInput = <Switch {...kwargs} />;
              break;
            case FORM_ELEMENT_TYPES.HIDDEN:
              itemInput = <input type="hidden" />;
              break;
            case FORM_ELEMENT_TYPES.CASCADER:
              itemInput = <input type="hidden" />;
              extraComponent = <Cascader {...kwargs} />;
              break;
            default:
              itemInput = <Input {...kwargs} />;
          }

          return (
            <Form.Item
              label={
                <span>
                  {label}
                  &nbsp;
                  {help ? (
                    <Tooltip title={help}>
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  ) : null}
                </span>
              }
              colon={false}
              key={index.toString()}
              className="margin-bottom-20"
              extra={desc}
              labelCol={blockElements.includes(element) ? {span: 24} : formItemLayout.labelCol}
              wrapperCol={blockElements.includes(element) ? {span: 24} : formItemLayout.wrapperCol}>
              {extraComponent}
              {getFieldDecorator(formItem.name, {
                preserve: true,
                ...fieldOptions,
              })(itemInput)}
            </Form.Item>
          );
        })}
        <Form.Item {...buttonPlacement}>
          {onCancel ? (
            <Button
              style={{
                width: buttonType === 'block' ? '100%' : null,
              }}
              size="large"
              onClick={() => onCancel(this.props.form)}
              htmlType="button">
              {cancelButtonText || 'Cancel'}
            </Button>
          ) : null}
        </Form.Item>

        <Form.Item {...buttonPlacement}>
          <Button
            onClick={this.handleSubmit}
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              width: buttonType === 'block' ? '100%' : null,
            }}>
            {submitButtonText || 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({});

const WrappedFormCreator = Form.create({})(FormCreator);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedFormCreator);
