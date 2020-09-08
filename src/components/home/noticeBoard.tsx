import React, {FC} from 'react';
import {Col,Typography} from 'antd';
import {NoticeCard} from 'components/home/noticeCard'

interface IProps {
  noticesData:Array<any>
}

const {Title} = Typography;

export const NoticeBoard:FC<IProps> = ({noticesData}) => {
  return (
    <div>
      <Title className='mx'>Notice</Title>
      <div className='notice-container'>
        {noticesData.map((details,index)=>(
          <Col span={24}>
            <NoticeCard {...{title:details.name,content:details.content,id:index+1}} />
          </Col>
        ))}
      </div>
    </div>
  );
};

