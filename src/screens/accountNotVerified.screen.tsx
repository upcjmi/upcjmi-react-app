import React, {FC, useState} from 'react';
import {Button, Result, Typography} from 'antd';
import {IUserMeta} from 'types/api.type';
import {reSendVerificationMailAPI} from 'helpers/api/api.helper';

interface IProps {
  user: IUserMeta;
}

// @ts-ignore
const SendMailButton: FC<any> = ({email}) => {
  const [status, setStatus] = useState('not-sent');
  switch (status) {
    case 'not-sent':
    case 'sending':
      return (
        <Button
          icon='mail'
          onClick={async () => {
            try {
              setStatus('sending');
              await reSendVerificationMailAPI();
              setStatus('sent');
            } catch (e) {
              setStatus('error')
            }
          }}
          loading={status === 'sending'}
        >
          {status === 'sending'? 'Sending you mail' : 'Send Verification Mail'}
        </Button>
      );
    case 'error':
      return 'An error occured while sending your verification mail. Try again later.';
    default:
      return `Sent you mail on your email (${email})`
  }
};

const {Title, Text} = Typography;
const Message: FC<IProps> = ({user}: IProps) => (
  <div style={{textAlign: 'left'}}>
    <Title level={3} style={{textAlign: 'center'}}>Verification Process</Title>

    <Title level={4} disabled={user.account.email_verified}>
      1. Verification of email
    </Title>
    <Text disabled={user.account.email_verified}>
      You need to verify your email in order to proceed next.
      <br />
      We sent you a verification mail, do check your spam folder.
    </Text>

    <br />
    <br />
    <div className='center-hv'>
      {user.account.email_verified? (
        <Text disabled>
          Your email is already verified
        </Text>
      ) : <SendMailButton email={user.email} />}
    </div>
    <br />
    <br />

    <Title level={4}>
      2. Verfication of documents
    </Title>
    We will manully verify your document by your respective department.
    This process will take 1-2 days.
    <br />
    We will notify you after compleation of process.
  </div>
);

const AccountNotVerifiedScreen: FC<IProps> = ({user}: IProps) => (
  <div className='container center-hv full-page'>
    <div style={{maxWidth: 600}}>
      <Result
        status='warning'
        title='You account is not yet verified'
        extra={<Message user={user} />}
      />
    </div>
  </div>
);


export default AccountNotVerifiedScreen;
