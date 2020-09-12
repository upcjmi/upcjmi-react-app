import React, {FC} from 'react';
import {Col, Skeleton, Typography} from 'antd';
import {NoticeCard} from 'components/home/noticeCard';
import {INotice} from 'types/common.type';

interface IProps {
  noticesData: Array<INotice>;
}

const {Title} = Typography;

export const NoticeBoard: FC<IProps> = ({noticesData}) => {
  return (
    <div>
      <Title className='mx'>Notice</Title>
      <div className='notice-container'>
        {noticesData.length > 0 ? (
          noticesData.map((details, index) => (
            <Col span={24}>
              <NoticeCard {...details} />
            </Col>
          ))
        ) : (
          <Skeleton loading title={{width: '100%'}} />
        )}
      </div>
    </div>
  );
};
