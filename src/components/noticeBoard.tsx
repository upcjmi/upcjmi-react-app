import React, {FC} from 'react';
import {Typography, Card} from 'antd';

interface IProps {
}

const {Title} = Typography;

const NoticeBoard: FC<IProps> = (props: IProps) => (
  <div>
    <Title level={3}>
      Notice Board
    </Title>
    <Card style={{height: 300, overflow: 'scroll'}} />
  </div>
);


export default NoticeBoard;
