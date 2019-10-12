import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Icon, Menu, Popover} from 'antd';

import {ISidebarRoute} from 'types/common.type';
import {selectScreen} from 'helpers/screen.helper';

interface IProps {
  routes: Array<ISidebarRoute>;
  match: string;
}

const JamiaLogo = require('assets/svgs/jamia-logo.svg');

const PortalNavigator: FC<IProps> = ({routes}: IProps) => {
  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(false);

  useEffect(() => {
    window.addEventListener('scroll', hide);

    return () => {
      window.removeEventListener('scroll', hide);
    };
  }, []);

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
              <span>{route.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );

  if (selectScreen(false, true))
    return (
      <div className='portal-side-nav'>
        <div className='logo-container center-hv white'>
          <img src={JamiaLogo} alt='University Placement Cell, Logo' />
        </div>
        {menu}
      </div>
    );

  return (
    <Popover
      placement='topRight'
      title={null}
      content={menu}
      trigger='click'
      visible={visible}
      onVisibleChange={visible1 => setVisible(visible1)}>
      <div role='button' className='collapse-button-mobile'>
        <Icon type='menu' />
      </div>
    </Popover>
  );
};

export default PortalNavigator;
