import React, {FC} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon, Menu} from 'antd';

import {ISidebarRoute} from '../types/common.type';

import '../styles/sidebar.scss';
import {selectScreen} from '../helpers/screen.helper';

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
  collapsed: boolean;
  toggle(): void;
  routes: Array<ISidebarRoute>;
  match: string;
}

const JamiaLogo = require('../assets/svgs/jamia-logo.svg');

const SideBar: FC<IProps> = ({collapsed, toggle, routes}: IProps) => {

  const desktopButton = (
    <a href='#!' className='collapse-button' onClick={(e) => {e.preventDefault(); toggle()}}>
      <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
    </a>
  );

  const mobileButton = (
    <a
      href='#!'
      onClick={(e) => {e.preventDefault(); toggle()}}
      style={{
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'fixed',
        bottom: 25,
        right: 25,
        backgroundColor: '#fff',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
        fontSize: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
    </a>
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: collapsed? selectScreen('-100vw', 0):0,
      height: '100vh',
      transition: 'left 0.2s',
    }}>
      <div style={{height: 64, backgroundColor: '#FFFFFF'}} className='logo-container center-hv'>
        <img src={JamiaLogo} alt='University Placement Cell, Logo' />
      </div>
      <Menu
        mode='inline'
        theme='light'
        inlineCollapsed={selectScreen(false, collapsed)}
        className='full-page'
        style={{
          width: selectScreen('100vw', collapsed? 80 : 256),
        }}
      >
        {routes.map((route: any, index: number) => (
          <Menu.Item key={index.toString()}>
            <Link to={route.path} onClick={() => {selectScreen(toggle, () => {})()}}>
              <Icon type={route.icon} />
              <span>{route.name}</span>
            </Link>
          </Menu.Item>
        ))}
        {selectScreen(mobileButton, desktopButton)}
      </Menu>
    </div>
  );
};


// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any): IStateProps => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any): IDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
