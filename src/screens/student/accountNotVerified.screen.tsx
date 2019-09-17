import React, {FC} from 'react';
import {Result} from 'antd';
import {IUserMeta} from '../../types/api.type';
import SignOutButton from '../../components/signOutButton';

interface IProps {
  user: IUserMeta;
}

const Message: FC<IProps> = ({user}: IProps) => (
  <div>
    {user.account.email_verified? (
      <>
        Your email is verified and our student coordinators will verify documnents provided by you.
      </>
    ) : (
      <>
        You will receive a email (on
        {' '}
        {user.email}
        ) to verify your email after signup.
        <br />
        If your email gets verified then
        our student coordinators will verify documnents provided by you.
      </>
    )}
    <br />
    This process normally takes 1-2 days.
    <br />
    <br />
    We will notify you after verification.
    <br />
    <SignOutButton />
  </div>
);

const AccountNotVerifiedScreen: FC<IProps> = ({user}: IProps) => (
  <div className='container center-hv'>
    <Result
      status='warning'
      title='You account is not yet verified'
      extra={<Message user={user} />}
    />
  </div>
);


export default AccountNotVerifiedScreen;
