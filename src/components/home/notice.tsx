import React, {FC, useEffect, useState} from 'react';
import {Typography, Row, Col, Result, Icon, Button} from 'antd';
import {INotice} from 'types/common.type';
import {getAllNotices} from 'helpers/api/core.api.helper';
import {NoticeCard} from './noticeCard';
import {NoticeBoard} from './noticeBoard';
import LoadingScreen from '../../screens/loading.screen';

interface IProps {
}


const {Title} = Typography;

const Notice: FC<IProps> = () => {
  const [loading, setLoading] = useState(true);
  const [allNotices, setAllNotices] = useState<Array<INotice>>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllNotices();
      setAllNotices(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div id='notices' className='container full-page white lighten-3'>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div id='notice' className='container full-page white lighten-3'>
      <div>
        <Row gutter={32} justify='start'>
          <Col sm={24} md={15}>
            <Title className='mx'>
                HighLights
            </Title>
            <div className='highlights'>
              <Col span={24}>
                {allNotices.length > 0 ? allNotices.slice(0, 5).map((details, index) => (
                  <NoticeCard highlight {...details} />
                )) : (
                  <Result
                    icon={<Icon type='smile' theme='twoTone' />}
                    title='We dont have any highLights for now!'
                    />
                )}
              </Col>
            </div>
          </Col>
          <Col sm={24} md={8}>
            <NoticeBoard noticesData={allNotices.splice(4)} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Notice;
