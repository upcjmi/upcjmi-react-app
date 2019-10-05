import React, {FC} from 'react';
import {Icon} from 'antd';
// @ts-ignore
import {ReactComponent as StackOverflowIcon} from 'assets/svgs/stackoverflow-icon.svg';

export const get = (obj: any, key: any, defaultValue: any = null) => {
  try {
    return obj[key];
  } catch (e) {
    return defaultValue;
  }
};

interface IProps {
  type: 'G' | 'W' | 'S' | 'B' | 'M' | 'L';
}
export const generalFilter = (input: string, option: any) =>
  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

export const GetProfileIcon: FC<IProps> = ({type}: any): any => {
  switch (type) {
    case 'G':
      return <Icon type='github' theme='filled' style={{marginLeft: 15}} />;
    case 'W':
      return <Icon type='link' style={{marginLeft: 15}} />;
    case 'S':
      return (
        <StackOverflowIcon
          style={{
            fill: '#595959',
            height: 30,
            width: 30,
            marginLeft: 15,
          }}
        />
      );
    case 'B':
      return <Icon type='behance' theme='filled' style={{marginLeft: 15}} />;
    case 'M':
      return <Icon type='mail' theme='filled' style={{marginLeft: 15}} />;
    case 'L':
      return <Icon type='linkedin' theme='filled' style={{marginLeft: 15}} />;
    default:
      return <Icon type='link' theme='filled' style={{marginLeft: 15}} />;
  }
};
