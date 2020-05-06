import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

import {
  CONTACT_PATH,
  PORTAL_HOME_PATH,
  SIGN_UP_PATH_COMPANY,
  SIGN_UP_PATH_STUDENT,
} from 'constants/routes/main.paths.constant';
import {IReduxState} from 'reducers';
import SignIn from './userAccountButton';
import {IUserMeta} from '../types/api.type';

interface IStateProps {
  isAuthenticated: boolean;
  user: null | undefined | IUserMeta;
}

interface IProps extends IStateProps {
  mode: 'vertical' | 'horizontal';
}

const {Item} = Menu;

const HeaderPills: FC<IProps> = ({mode = 'horizontal', isAuthenticated, user}: IProps) => (
  <div>
    <div className='header-pill center-hv full-height'>
      <SignIn />
    </div>

    <div className='header-pill'>
      <Menu mode={mode} className='no-border' selectedKeys={[]}>
        <Item key='contact'>
          <Link to={CONTACT_PATH}>
            <Icon type='phone' />
            Contact Us
          </Link>
        </Item>
        {isAuthenticated ? (
          <Item key='appstore'>
            <Link to={PORTAL_HOME_PATH}>
              <Icon type='appstore' />
              Placement Portal
            </Link>
          </Item>
        ) : (
          <Item key='sign-up-student'>
            <Link to={SIGN_UP_PATH_STUDENT}>
              <Icon type='user-add' />
              Create Student Account
            </Link>
          </Item>
        )}
        {isAuthenticated ? null: (
          <Item key='sign-up-company'>
            <Link to={SIGN_UP_PATH_COMPANY}>
              <Icon type='user-add' />
              Create Company Account
            </Link>
          </Item>
        )}
        {isAuthenticated && user ? (
          <Item key='user'>
            <Link to={PORTAL_HOME_PATH}>{user.name}</Link>
          </Item>
        ) : null}
      </Menu>
    </div>
  </div>
);

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(HeaderPills);
