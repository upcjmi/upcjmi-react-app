import React, {FC} from 'react';
import {Typography, Card} from 'antd';

interface IProps {}

const {Title} = Typography;

const NoticeBoard: FC<IProps> = () => (
  <div>
    <Title level={3}>Notice Board</Title>
    <Card className='overflow-scroll height-300' />
  </div>
);

export default NoticeBoard;
