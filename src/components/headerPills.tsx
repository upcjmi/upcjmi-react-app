import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom';

import {CONTACT_PATH, PORTAL_HOME_PATH, SIGN_UP_PATH} from 'constants/routes/main.paths.constant';
import {IReduxState} from 'reducers';
import SignIn from './userAccountButton';

interface IStateProps {
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
  mode: 'vertical' | 'horizontal';
}

const {Item} = Menu;

const HeaderPills: FC<IProps> = ({mode = 'horizontal', isAuthenticated}: IProps) => (
  <div>
    <div className='header-pill center-hv' style={{height: '100%'}}>
      <SignIn />
    </div>

    <div className='header-pill'>
      <Menu mode={mode} style={{border: 0}} selectedKeys={[]}>
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
      </Menu>
    </div>
  </div>
);

const mapStateToProps = (state: IReduxState): IStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any): IDispatchProps => ({});

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderPills);
