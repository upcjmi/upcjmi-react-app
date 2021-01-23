import React, {FC, useEffect} from 'react';
import {Avatar, Typography} from 'antd';

import {selectScreen} from 'helpers/screen.helper';

interface IProps {
  name: string;
  designation: string;
  image?: any;
}

const {Title, Text} = Typography;

export const TeamCardHome: FC<IProps> = ({name, designation, image}) => {
  useEffect(() => {}, []);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 15,
        textAlign: selectScreen('center', null),
        justifyContent: selectScreen('space-around', null),
        alignItems: 'center',
      }}>
      <Avatar src={image} size={64} />
      <div
        style={{
          marginLeft: selectScreen(0, 5, 10),
        }}>
        <Title className='margin-bottom-0' level={4}>
          {name}
        </Title>
        <Text strong>{designation}</Text>
      </div>
    </div>
  );
};
