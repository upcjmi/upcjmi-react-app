import React, {FC} from 'react';
import {Typography} from 'antd';
import BasicInfoForm from '../../forms/signUp/basicDetail.form';

interface IProps {
  action: any;
  next: any;
}

const {Title} = Typography;

const BasicDetailSignUp: FC<IProps> = ({action, next}: IProps) => {
  const handelSubmit = (data: any) => {
    action(data);
    next();
  };
  // @ts-ignore
  const BasicInfoFormHolder = <BasicInfoForm onSubmit={handelSubmit} />;

  return (
    <div>
      <Title>Basic Details</Title>
      {BasicInfoFormHolder}
    </div>
  );
};

export default BasicDetailSignUp;
