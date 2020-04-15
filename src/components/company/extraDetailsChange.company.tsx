import React, {FC, useState} from 'react';
import {connect} from 'react-redux';
import {Typography, Form, Input, DatePicker, Tag, Button, Select, Icon} from 'antd';
import moment from 'moment';

import {openNotificationWithIcon} from 'helpers/notification.helper';
import {saveCompanyExtraDataAPI} from 'helpers/api/company.api.helper';
import {IReduxState} from 'reducers';
import {ICompanyExtraDetails} from 'types/company.api.type';

const {Title} = Typography;
const {Option} = Select;

interface ITagProps {
  tags: Array<string>;
  change: any;
  addText: string;
}

const TagEditor: FC<ITagProps> = ({tags, change, addText}: ITagProps) => {
  const [inputVisible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const removeTag = (tag: string): void => {
    const newTags = tags;
    const index = newTags.indexOf(tag);
    if (index > -1) {
      newTags.splice(index, 1);
    }
    change(newTags);
  };

  const addTag = (e: any) => {
    const newTags = tags;
    const {value} = e.target;
    if (value.length <= 0) return;
    newTags.push(value);
    change(newTags);
    setVisible(false);
    setInputValue('');
  };

  return (
    <div>
      {tags.map(tag => {
        return (
          <Tag key={tag} closable onClose={() => removeTag(tag)}>
            {tag}
          </Tag>
        );
      })}
      {inputVisible ? (
        <Input
          value={inputValue}
          placeholder={addText}
          size='small'
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={addTag}
          onBlur={addTag}
          className='width-150'
          autoFocus
        />
      ) : (
        <Button
          size='small'
          type='dashed'
          icon='plus'
          onClick={() => {
            setVisible(true);
          }}>
          {addText}
        </Button>
      )}
    </div>
  );
};

interface ILinkDisplayProps {
  type: string;
  link: string;
  onChange: any;
  remove: any;
}

const LinkDisplay: FC<ILinkDisplayProps> = ({type, link, onChange, remove}: ILinkDisplayProps) => {
  const setProfile = (nType: string, nLink: string) => {
    onChange({
      type: nType,
      link: nLink,
    });
  };

  return (
    <Input.Group compact style={{width: '100%', display: 'block'}}>
      <Select
        value={type}
        style={{width: '30%'}}
        onChange={(value: string) => {
          setProfile(value, link);
        }}>
        <Option value='W'>Link</Option>
        <Option value='G'>GitHub</Option>
        <Option value='B'>Behance</Option>
        <Option value='S'>StackOverFlow</Option>
        <Option value='M'>Medium</Option>
      </Select>
      <Input
        style={{width: '60%'}}
        placeholder='https://example.com'
        value={link}
        onChange={(e: any) => setProfile(type, e.target.value)}
      />
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span className='center' style={{width: '10%'}} onClick={remove}>
        <Icon type='delete' />
      </span>
    </Input.Group>
  );
};

interface IProfile {
  type: string;
  link: string;
}

interface ILinkEditorProps {
  links: Array<IProfile>;
  change: any;
}

const LinkEditor: FC<ILinkEditorProps> = ({links, change}: ILinkEditorProps) => {
  const setProfile = (index: number, link: any) => {
    const newLinks = links;
    newLinks[index] = link;
    change(newLinks);
  };

  const addProfile = () => {
    const newLinks = links;
    newLinks.push({
      type: 'W',
      link: '',
    });
    change(newLinks);
  };

  const removeProfile = (index: number) => {
    const newLinks = links;
    newLinks.splice(index, 1);
    change(newLinks);
  };

  return (
    <div>
      {links.map(({link, type}, index) => (
        <LinkDisplay
          key={index.toString()}
          type={type}
          link={link}
          onChange={(newLink: ILinkEditorProps) => setProfile(index, newLink)}
          remove={() => removeProfile(index)}
        />
      ))}
      <Button type='dashed' icon='plus' onClick={addProfile} className='full-width'>
        Add Profile
      </Button>
    </div>
  );
};

interface IStateProps {
  extraDetails: ICompanyExtraDetails | null | undefined;
}

interface IProps extends IStateProps {
  action: 'add' | 'edit';
  form: any;
  id: any;
  name: any;
  about: any;
  onSave: any;
}

const ExtraDetailsChangeCompany: FC<IProps> = ({
  action,
  form,
  extraDetails,
  name,
  about,
  id,
  onSave,
}: IProps) => {
  const {getFieldDecorator, setFieldsValue, getFieldValue, getFieldsValue} = form;
  let details: ICompanyExtraDetails = {
    name: '',
    about: '',
  };
  if (extraDetails !== null && extraDetails !== undefined) details = extraDetails;
  const handelSubmit = (e: any) => {
    e.preventDefault();
    const {validateFields} = form;
    validateFields(async (err: any) => {
      if (!err) {
        const data = getFieldsValue();
        try {
          await saveCompanyExtraDataAPI(data, action, id);
          openNotificationWithIcon('success', 'Saved your details');
          onSave(data);
        } catch (error) {
          openNotificationWithIcon('error', 'There are errors in saving your details.');
        }
      } else openNotificationWithIcon('error', 'Please Correct the error displayed in forms.');
    });
  };

  return (
    <div>
      <Title>Details</Title>
      <br />
      <Form onSubmit={handelSubmit} hideRequiredMark>
        <Form.Item label='Company Name'>
          {getFieldDecorator('name', {
            rules: [{required: true, max: 50}],
            initialValue: name,
          })(<Input type='text' placeholder='Company Name' />)}
        </Form.Item>

        <Form.Item label='About Company'>
          {getFieldDecorator('about', {
            rules: [{required: true, max: 400}],
            initialValue: about,
          })(<Input.TextArea placeholder='About Company' autosize />)}
        </Form.Item>

        <br />
        <br />
        <Button type='primary' className='full-width' onClick={handelSubmit}>
          Save
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  extraDetails: state.company.extraDetails,
});

export default connect(mapStateToProps)(Form.create({})(ExtraDetailsChangeCompany));
