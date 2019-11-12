import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

import {CONTACT_PATH, PORTAL_HOME_PATH, SIGN_UP_PATH} from 'constants/routes/main.paths.constant';
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
          <Item key='sign-up'>
            <Link to={SIGN_UP_PATH}>
              <Icon type='user-add' />
              Create New Account
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
