import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon, Menu, Popover} from 'antd';

import {ISidebarRoute} from 'types/common.type';

import 'styles/sidebar.scss';
import {selectScreen} from 'helpers/screen.helper';

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
  routes: Array<ISidebarRoute>;
  match: string;
}

const JamiaLogo = require('assets/svgs/jamia-logo.svg');

const PortalNavigator: FC<IProps> = ({routes}: IProps) => {
  const menu = (
    <>
      <Menu
        mode='vertical'
        theme='light'
        forceSubMenuRender
        inlineCollapsed={selectScreen(null, true)}
        className={selectScreen(null, 'full-page')}
        selectedKeys={[]}>
        {routes.map((route: any, index: number) => (
          <Menu.Item key={index.toString()}>
            <Link to={route.path}>
              <Icon type={route.icon} />
              {/* {selectScreen(null, <span>{route.name}</span>)} */}
              <span>{route.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );

  if (selectScreen(false, true))
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          height: '100vh',
          transition: 'left 0.2s',
          zIndex: 1,
        }}>
        <div
          style={{height: 64, backgroundColor: '#FFFFFF', width: 80}}
          className='logo-container center-hv'>
          <img src={JamiaLogo} alt='University Placement Cell, Logo' />
        </div>
        {menu}
      </div>
    );

  return (
    <Popover placement='topRight' title={null} content={menu} trigger='hover'>
      <div role='button' className='collapse-button-mobile'>
        <Icon type='menu' />
      </div>
    </Popover>
  );
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any): IStateProps => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortalNavigator);
