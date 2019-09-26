import React, {FC, useState} from 'react';
import { Drawer } from 'antd';
import {selectScreen} from '../helpers/screen.helper';

interface IProps {
  children: any;
  title?: string;
  [key: string]: any;
}


const SideDrawerForm: FC<IProps> = ({title, children, render: Render}: IProps) => {
  const [visible, setVisibility] = useState(false);

  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={() => setVisibility(true)}>
        {children}
      </div>
      <Drawer
        title={title}
        placement='right'
        closable
        onClose={() => setVisibility(false)}
        visible={visible}
        width={selectScreen(300, 400, 500)}
      >
        <Render />
      </Drawer>
    </div>
  );
};


export default SideDrawerForm;
