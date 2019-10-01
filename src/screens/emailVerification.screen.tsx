import React, {FC, useState, useEffect} from 'react';
import {Spin, Result, Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import {verifyEmailAPI} from 'helpers/api/api.helper';
import {openNotificationWithIcon} from 'helpers/notification.helper';

interface IProps {
  match: any
}

const EmailVerificationScreen: FC<IProps> = ({match}: any) => {

  const [verifing, setVerifing] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const verify = async () => {
      try {
        const data = await verifyEmailAPI(match.params.hash);
        setEmail(data.email);
        setVerifing(false);
      } catch (e) {
        openNotificationWithIcon('error', 'Error in verification');
      }
    };

    verify();
  });

  const display = () => {
    if(verifing)
      return (
        <>
          <Spin size='large' tip='Verifying your email' />
          <br />
        </>
      );

    if(email !== '')
      return (
        <Result
          icon={<Icon type='smile' theme='twoTone' />}
          status='success'
          title={`You email ${email} has been verified`}
          extra='Continue by signing in.'
        />
      );

    return (
      <Result
        status='warning'
        title='Trouble verifying your email'
      />
    )
  };

  return (
    <div className='container center-hv full-page'>
      <div>
        {display()}
      </div>
    </div>
  );
};

export default withRouter(EmailVerificationScreen);
