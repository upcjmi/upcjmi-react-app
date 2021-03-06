import React, {FC, useState, useEffect} from 'react';
import {Typography, Tabs, Descriptions, Card, Collapse, Skeleton, Result} from 'antd';
import {withRouter} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {applyToJobAPI, getJobDetailsAPI} from 'helpers/api/company.api.helper';
import FormCreator from 'components/formCreator';
import {applicationFormTemplate} from 'forms/student/application.student.tForm';
import {htmlNotification, openNotificationWithIcon} from 'helpers/notification.helper';
import {captchaFormTemplate} from 'forms/captcha.tForm';

interface IProps {
  match: any;
  history: any;
}

const {Title, Text} = Typography;
const {TabPane} = Tabs;
const {Panel} = Collapse;

const applicationConfirmation = `# Notice
- By clicking on apply you agree to our terms and condition for use of this application
- By clicking on apply you agree to share all your provided details to the respective company.
- You confirm that the information provided is up-to-date and correct.
- You confirm that you read all the details of this job and you are eligible for the same.
- You also confirm to abide university rules and will abide to them.
- **You can not edit your application later.**
company will see your resume which is at the time of application**

*If any of the above fails your access of portal can be blocked*
`;

const RecruitmentDetailsStudentScreen: FC<IProps> = ({match, history}: IProps) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const [jobDetails, setJobDetails] = useState({
    title: '',
    package: '',
    close: '',
    about: '',
    rounds: [
      {
        title: '',
        details: '',
      },
    ],
    company: {
      name: '',
      about: '',
    },
    application_format: '',
    application_required: true,
    can_apply: false,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const {company, job} = match.params;
        const data = await getJobDetailsAPI(company, job);
        setJobDetails(data);
        setLoading(false);
      } catch (e) {
        setStatus(e.status);
      }
    };

    load();
  }, [match]);

  if (status !== 0)
    return (
      <div className='container full-page center-hv'>
        <Result
          // @ts-ignore
          status={status.toString()}
          title={status.toString()}
          subTitle={status === 404 ? 'This page does not exist' : null}
        />
      </div>
    );

  if (loading)
    return (
      <div className='container grey lighten-3'>
        <Card>
          <Skeleton />
        </Card>
      </div>
    );

  const {
    title,
    package: pay,
    close,
    about,
    rounds,
    company,
    application_required: applicationRequired,
    application_format: application,
    can_apply: canApply,
  } = jobDetails;

  const onSubmit = async (data: any) => {
    try {
      const {company: companyId, job} = match.params;
      await applyToJobAPI(companyId, job, data);
      openNotificationWithIcon('success', 'Your form is submitted successfully');
      history.push('');
    } catch (e) {
      if (e.status === 406) htmlNotification('warning', 'You applied to this prior');
      else htmlNotification('error', 'Correct the error given below', e.data.detail);
    }
  };

  const applicationForm = applicationRequired ? (
    // @ts-ignore
    <FormCreator
      formTemplate={applicationFormTemplate}
      formLayout={{}}
      submitButtonText='APPLY NOW'
      initialValue={async () => ({
        application,
      })}
      onSubmit={(objForm: any) => onSubmit(objForm.getFieldsValue())}
    />
  ) : (
    // @ts-ignore
    <FormCreator
      formTemplate={captchaFormTemplate}
      submitButtonText='APPLY NOW'
      onSubmit={(objForm: any) =>
        onSubmit({
          ...objForm.getFieldsValue(),
          application: '',
        })}
    />
  );

  return (
    <div className='container'>
      <Title>
        {title}
        {' - '}
        {company.name}
      </Title>
      <Card>
        <Descriptions title='Basic info'>
          <Descriptions.Item label='Package'>{pay}</Descriptions.Item>
          <Descriptions.Item label='Apply By'>{new Date(close).toLocaleString()}</Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <Title level={3}>
About The Company (
          {company.name}
)
        </Title>
        <Text>
          <ReactMarkdown source={company.about} />
        </Text>

        <Title level={3}>Rounds</Title>
        <Text>
          <Collapse defaultActiveKey={[]} accordion>
            {rounds.map((round, index) => (
              <Panel header={`${index + 1}. ${round.title}`} key={index.toString()}>
                <ReactMarkdown source={round.details} />
              </Panel>
            ))}
          </Collapse>
        </Text>
      </Card>
      <ReactMarkdown source={about} />
      <ReactMarkdown source={applicationConfirmation} />
      {canApply ? applicationForm : "Sorry! But you can't apply to this."}
    </div>
  );
};
export default withRouter(RecruitmentDetailsStudentScreen);
