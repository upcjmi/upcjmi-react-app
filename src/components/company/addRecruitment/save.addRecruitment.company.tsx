import React, {FC, useEffect, useState} from 'react';
import {Spin, Button} from 'antd';
import {saveNewJobAPI} from 'helpers/api/company.api.helper';
import {openNotificationWithIcon} from 'helpers/notification.helper';

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

        setStatus('loading');
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
      default:
        return 'Unknown signing up status';
    }
  };

  return (
    <div style={{height: 600}} className='center-hv'>
      <div>{spinner()}</div>
    </div>
  );
};

export default SaveAddRecruitmentCompany;
