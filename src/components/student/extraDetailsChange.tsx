import React, {FC, useState} from 'react';
import { connect } from 'react-redux';
import {Typography, Form, Input, DatePicker, Tag, Button, Select, Icon} from 'antd';
import moment from 'moment';

import {openNotificationWithIcon} from '../../helpers/notification.helper';
import {saveStudentExtraDataAPI} from '../../helpers/api/student.api.helper';
import {IReduxState} from '../../reducers';
import {IStudentExtraDetails} from '../../types/student.api.type';
import {loadStudentExtraDetails} from '../../actions/student.action';

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
    change(newTags)
  };

  const addTag = (e: any) => {
    const newTags = tags;
    newTags.push(e.target.value);
    change(newTags);
    setVisible(false);
    setInputValue('');
  };

  return (
    <div>
      {tags.map((tag) => {
        return (
          <Tag key={tag} closable onClose={() => removeTag(tag)}>{tag}</Tag>
        )
      })}
      {inputVisible? (
        <Input
          value={inputValue}
          placeholder={addText}
          size='small'
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={addTag}
          style={{ width: 150 }}
          autoFocus
        />
      ): (
        <Button
          size='small'
          type='dashed'
          icon='plus'
          onClick={() => {
            setVisible(true);
          }}
        >
          {addText}
        </Button>
      )}
    </div>
  )
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
      link: nLink
    })
  };

  return (
    <Input.Group compact style={{ width: '100%' }}>
      <Select
        value={type}
        style={{ width: '30%' }}
        onChange={(value: string) => {
          setProfile(value, link);
        }}
      >
        <Option value='W'>Link</Option>
        <Option value='G'>GitHub</Option>
        <Option value='B'>Beehance</Option>
        <Option value='S'>StackOverFlow</Option>
        <Option value='M'>Medium</Option>
      </Select>
      <Input
        style={{ width: '60%' }}
        placeholder='https://example.com'
        value={link}
        onChange={(e: any) => setProfile(type, e.target.value)}
      />
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span style={{ width: '10%', textAlign: 'center' }} onClick={remove}>
        <Icon type='delete' />
      </span>
    </Input.Group>
  );
};

interface IProfile{
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
    change(newLinks)
  };

  const addProfile = () => {
    const newLinks = links;
    newLinks.push({
      type: 'W',
      link: ''
    });
    change(newLinks)
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
      <Button type='dashed' icon='plus' onClick={addProfile} style={{width: '100%'}}>
        Add Profile
      </Button>
    </div>
  )
};

interface IStateProps {
  extraDetails: IStudentExtraDetails | null | undefined;
}

interface IDispatchProps {
  loadExtraData: any
}

interface IProps extends IStateProps, IDispatchProps {
  action: 'add' | 'edit';
  form: any;
}

const ExtraDetailsChange: FC<IProps> = ({action, form, extraDetails, loadExtraData}: IProps) => {
  const {getFieldDecorator, setFieldsValue, getFieldValue, getFieldsValue} = form;
  let details: IStudentExtraDetails = {
    tag_line: '',
    about: '',
    dob: '',
    gender: 'M',
    skills: [],
    profiles: [],
    student: {
      roll: '',
      student_id: '',
      course: '',
      year: 1,
    }
  };

  if(extraDetails !== null && extraDetails !== undefined)
    details = extraDetails;

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const {validateFields} = form;

    validateFields(async (err: any) => {
      if (!err){
        const data = getFieldsValue();
        try{
          await saveStudentExtraDataAPI(data, action);
          loadExtraData();
          openNotificationWithIcon('success', 'Saved your details')
        } catch (error) {
          openNotificationWithIcon('error', 'There are errors in saving your details.')
        }
      }
      else openNotificationWithIcon('error', 'Please Correct the error displayed in forms.');
    });
  };

  return (
    <div>
      <Title>
        Extra details
      </Title>
      <br />
      <Form onSubmit={handelSubmit} hideRequiredMark>

        <Form.Item label='Tag line (short description)'>
          {getFieldDecorator('tag_line', {
            rules: [{required: true, max: 50}],
            initialValue: details.tag_line
          })(<Input type='text' placeholder='Write about you self in 1 line (50 characters)' />)}
        </Form.Item>

        <Form.Item label='About'>
          {getFieldDecorator('about', {
            rules: [{required: true, max: 400}],
            initialValue: details.about
          })(
            <Input.TextArea
              placeholder='Tell about yourself in 1 paragraph (400 characters)'
              autosize
            />
          )}
        </Form.Item>

        <Form.Item label='Date of Birth'>
          {getFieldDecorator('dob', {
            rules: [{required: true}],
            initialValue: details.dob,
          })(<Input type='hidden' />)}
          <DatePicker
            format='YYYY-MM-DD'
            // value={details.dob}
            defaultValue={moment(details.dob, 'YYYY-MM-DD')}
            onChange={(date, dateString) => setFieldsValue({'dob': dateString})}
          />
        </Form.Item>

        <Form.Item label='Gender'>
          {getFieldDecorator('gender', {
            rules: [{required: true}],
            initialValue: details.gender
          })(
            <Select>
              <Option value='M'>Male</Option>
              <Option value='F'>Female</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label='Your Skills' style={{marginBottom: 0}}>
          {getFieldDecorator('skills', {
            rules: [{required: true}],
            initialValue: details.skills
          })(<Input type='hidden' />)}
          <TagEditor
            tags={getFieldValue('skills')}
            change={(skills: Array<string>) => {
              setFieldsValue({'skills': skills})
            }}
            addText='Add New Skill'
          />
        </Form.Item>
        <Form.Item label='Your Profiles' style={{marginBottom: 0}}>
          {getFieldDecorator('profiles', {
            rules: [{required: true}],
            initialValue: details.profiles
          })(<Input type='hidden' />)}
          <LinkEditor
            links={getFieldValue('profiles')}
            change={(profiles: Array<string>) => {
              setFieldsValue({'profiles': profiles})
            }}
          />
        </Form.Item>
        <br />
        <br />
        <Button type='primary' style={{width: '100%'}} onClick={handelSubmit}>
          Save
        </Button>
      </Form>
    </div>
  );
};


const mapStateToProps = (state: IReduxState): IStateProps => ({
  extraDetails: state.student.extraDetails
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  loadExtraData: () => dispatch(loadStudentExtraDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Form.create({})(ExtraDetailsChange)
);
