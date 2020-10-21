import React, {FC} from 'react';
import {Col, Icon, Result, Card, Typography} from 'antd';
import {NoticeCard} from 'components/home/noticeCard';
import {INotice} from 'types/common.type';

interface IProps {
  noticesData: Array<INotice>;
  loading?: boolean;
}

const {Title} = Typography;

export const NoticeBoard: FC<IProps> = ({noticesData}) => {
  return (
    <Card style={{backgroundColor: '#fafafa'}}>
      <Title className='mx'>Notice</Title>
      <div className='notice-container' style={{backgroundColor: '#fafafa'}}>
        {noticesData.length > 0 ? (
          noticesData.map((details, index) => (
            <Col span={24}>
              <NoticeCard {...details} />
            </Col>
          ))
        ) : (
          <Result
            icon={<Icon type='smile' theme='twoTone' />}
            title='We dont have any notices for now!'
          />
        )}
      </div>
    </Card>
  );
};
