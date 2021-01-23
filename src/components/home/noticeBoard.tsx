import React, {FC} from 'react';
import {Col, Icon, Result, Card, Typography} from 'antd';
import {NoticeCard} from 'components/home/noticeCard';
import {INotice} from 'types/common.type';
import LoadingScreen from '../../screens/loading.screen';

interface IProps {
  noticesData: Array<INotice>;
  loading?: boolean;
}

const {Title} = Typography;

export const NoticeBoard: FC<IProps> = ({noticesData, loading}) => {
  if (loading) {
    return (
      <div id='notices' className='container full-page white lighten-3'>
        <LoadingScreen />
      </div>
    );
  }
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
