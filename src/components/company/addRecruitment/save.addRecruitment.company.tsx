import React, {FC, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Spin, Button} from 'antd';
import {saveNewJobAPI} from 'helpers/api/company.api.helper';
import {openNotificationWithIcon} from 'helpers/notification.helper';
import {COMPANY_PORTAL_HOME_PATH} from '../../../constants/routes/main.paths.constant';

interface IProps {
  action: any;
  next: any;
  data: any;
}

const SaveAddRecruitmentCompany: FC<IProps> = ({action, data, next}: IProps) => {
  const [status, setStatus] = useState('progress');

  useEffect(() => {
    const save = async () => {
      action(data);
      try {
        await saveNewJobAPI(data);
        openNotificationWithIcon('success', 'Job saved');

        setStatus('saved');
      } catch (e) {
        console.log(e);
        openNotificationWithIcon('error', 'Error in saving job');
        setStatus('failed');
      }
    };

    save();
  }, [data, action]);

  const spinner = (): any => {
    switch (status) {
      case 'progress':
        return <Spin tip='Saving the job' />;

      case 'failed':
        return (
          <div className='center'>
            Failed to create account try again. Make sure all fields are correctly entered.
            <br />
            <Button type='danger'>Please Try Again</Button>
          </div>
        );
      case 'saved':
        return <Redirect to={COMPANY_PORTAL_HOME_PATH} />;
      default:
        return 'Unknown Status Code';
    }
  };

  return (
    <div style={{height: 600}} className='center-hv'>
      <div>{spinner()}</div>
    </div>
  );
};

export default SaveAddRecruitmentCompany;
