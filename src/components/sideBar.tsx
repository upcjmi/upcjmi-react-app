import React, {FC} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon, Menu} from 'antd';

import {ISidebarRoute} from '../types/common.type';

import '../styles/sidebar.scss';

interface IStateProps {}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
  collapsed: boolean;
  toggle(): void;
  routes: Array<ISidebarRoute>;
  match: string;
}


const SideBar: FC<IProps> = ({collapsed, toggle, routes}: IProps) => {
  return (
    <div>
      <Menu
        mode='inline'
        theme='light'
        inlineCollapsed={collapsed}
        className='full-page'
        style={{position: 'absolute', width: collapsed? 70 :256}}
      >
        {routes.map((route: any, index: number) => (
          <Menu.Item key={index.toString()}>
            <Link to={route.path}>
              <Icon type={route.icon} />
              <span>{route.name}</span>
            </Link>
          </Menu.Item>
        ))}
        <a href='#!' className='collapse-button' onClick={(e) => {e.preventDefault(); toggle()}}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </a>
      </Menu>
    </div>
  );
};


const mapStateToProps = (state: any): IStateProps => ({});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
