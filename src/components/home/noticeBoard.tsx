import React, {FC} from 'react';
import {Col,Typography} from 'antd';
import {NoticeCard} from 'components/home/noticeCard'
import {INotice} from 'types/common.type';

interface IProps {
  noticesData:Array<INotice>
}

const {Title} = Typography;


export const NoticeBoard:FC<IProps> = ({noticesData}) => {
  return (
    <div>
      <Title className='mx'>Notice</Title>
      <div className='notice-container'>
        {noticesData.map((details,index)=>(
          <Col span={24}>
            <NoticeCard {...details} />
          </Col>
        ))}
      </div>
    </div>
  );
};

