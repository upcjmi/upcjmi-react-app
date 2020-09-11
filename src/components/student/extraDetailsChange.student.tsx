import React, {FC, useState} from 'react';
import {connect} from 'react-redux';
import {
  Typography,
  Form,
  Input,
  DatePicker,
  Tag,
  Button,
  Select,
  Icon,
  Upload,
  message,
} from 'antd';
import moment from 'moment';
import {openNotificationWithIcon} from 'helpers/notification.helper';
import {saveStudentExtraDataAPI} from 'helpers/api/student.api.helper';
import {IReduxState} from 'reducers';
import {IStudentExtraDetails} from 'types/student.api.type';
import {loadStudentExtraDetails} from 'actions/student.action';
import {
  resumeUploadURL,
  removeFileFromServer,
} from 'helpers/api/file.api.helper';
import {RESUME_BUILDER} from 'constants/routes/main.paths.constant';

const {Dragger} = Upload;
const {Title} = Typography;
const {Option} = Select;

interface ITagProps {
  tags: Array<string>;
  change: any;
  addText: string;
}

const props = {
  name: 'file',
  multiple: false,
  data: (file: any) => ({
    upload_id: file.uid,
  }),
  onRemove: (file: any) =>
    file.response ? removeFileFromServer(file.response.identifier, file.uid) : true,
  action: resumeUploadURL(),
};

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
  extraDetails: IStudentExtraDetails | null | undefined;
}

interface IDispatchProps {
  loadExtraData: any;
}

interface IProps extends IStateProps, IDispatchProps {
  action: 'add' | 'edit';
  form: any;
}

const ExtraDetailsChangeStudent: FC<IProps> = ({
  action,
  form,
  extraDetails,
  loadExtraData,
}: IProps) => {
  const {getFieldDecorator, setFieldsValue, getFieldValue, getFieldsValue} = form;
  let details: IStudentExtraDetails = {
    tag_line: '',
    about: '',
    dob: '1998-12-11',
    gender: 'M',
    skills: [],
    resume:'',
    profiles: [],
    student: {
      roll: '',
      student_id: '',
      course: '',
      year: 1,
    },
    grade: '',
    grading_sys: '',
    active_back_log: false,
    previous_back_log: false,
  };

  if (extraDetails !== null && extraDetails !== undefined) details = extraDetails;

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const {validateFields} = form;

    validateFields(async (err: any) => {
      if (!err) {
        const data = getFieldsValue();
        try {
          await saveStudentExtraDataAPI(data, action);
          loadExtraData();
          openNotificationWithIcon('success', 'Saved your details');
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
        <Form.Item label='Tag line (short description)'>
          {getFieldDecorator('tag_line', {
            rules: [{required: true, max: 50}],
            initialValue: details.tag_line,
          })(<Input type='text' placeholder='Write about you self in 1 line (50 characters)' />)}
        </Form.Item>

        <Form.Item label='About'>
          {getFieldDecorator('about', {
            rules: [{required: true, max: 400}],
            initialValue: details.about,
          })(
            <Input.TextArea
              placeholder='Tell about yourself in 1 paragraph (400 characters)'
              autosize
            />,
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
            onChange={(date, dateString) => setFieldsValue({dob: dateString})}
          />
        </Form.Item>

        <Form.Item label='Gender'>
          {getFieldDecorator('gender', {
            rules: [{required: true}],
            initialValue: details.gender,
          })(
            <Select>
              <Option value='M'>Male</Option>
              <Option value='F'>Female</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label='Your Skills' className='margin-bottom-0'>
          {getFieldDecorator('skills', {
            rules: [{required: true}],
            initialValue: details.skills,
          })(<Input type='hidden' />)}
          <TagEditor
            tags={getFieldValue('skills')}
            change={(skills: Array<string>) => {
              setFieldsValue({skills});
            }}
            addText='Add New Skill'
          />
        </Form.Item>
        <Form.Item label='Your Profiles' className='margin-bottom-0'>
          {getFieldDecorator('profiles', {
            rules: [{required: true}],
            initialValue: details.profiles,
          })(<Input type='hidden' />)}
          <LinkEditor
            links={getFieldValue('profiles')}
            change={(profiles: Array<string>) => {
              setFieldsValue({profiles});
            }}
          />
        </Form.Item>
        <Form.Item label='Resume' className='margin-bottom-0'>
          <Dragger
            {...props}
            onChange={(info: any) => {
              const {status} = info.file;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
              const files: any = [];
              info.fileList.map((file: any) => {
                files.push({
                  upload_id: file.uid,
                  identifier: file.response ? file.response.identifier : '',
                });
                return '';
              });
              setFieldsValue({
                resume: files[0],
              });
            }}
          >
            <p className='ant-upload-drag-icon'>
              <Icon type='inbox' />
            </p>
            <p className='ant-upload-text'>Click or drag file to this area to upload</p>
            <p className='ant-upload-hint'>
              Upload Your Resume.
            </p>
            <p className='ant-upload-hint'>
              If you do not have Resume you can create using our Resume Builder.
            </p>
          </Dragger>
          {getFieldDecorator('resume', {
            rules: [{required: true}],
            preserve: true,
          })(<input type='hidden' value={getFieldValue('resume')} />)}
        </Form.Item>
        <div className='row justify-center my-2'>
          <Button type='primary'>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href={RESUME_BUILDER} target='_blank'>
              Resume Builder
            </a>
          </Button>
        </div>

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
  extraDetails: state.student.extraDetails,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  loadExtraData: () => dispatch(loadStudentExtraDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create({})(ExtraDetailsChangeStudent));
