import React, {FC} from 'react';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

import SignIn from './userAccountButton';
import {CONTACT_PATH, SIGN_UP_PATH, STUDENT_PORTAL_HOME_PATH} from '../constants/paths.constant';

interface IProps {
  mode: 'vertical' | 'horizontal'
}

const {Item} = Menu;

const HeaderPills: FC<IProps> = ({mode='horizontal'}: IProps) => (
  <div>
    <div className='header-pill center-hv' style={{height: '100%'}}>
      <SignIn />
    </div>

    <div className='header-pill'>
      <Menu mode={mode} style={{border: 0}}>
        <Item key='contact'>
          <Link to={CONTACT_PATH}>
            <Icon type='phone' />
            Contact Us
          </Link>
        </Item>

        <Item key='appstore'>
          <Link to={STUDENT_PORTAL_HOME_PATH}>
            <Icon type='appstore' />
            Placement Portal
          </Link>
        </Item>

        <Item key='sign-up'>
          <Link to={SIGN_UP_PATH}>
            <Icon type='user-add' />
            Create New Account
          </Link>
        </Item>
      </Menu>
    </div>
  </div>
);


export default HeaderPills;
