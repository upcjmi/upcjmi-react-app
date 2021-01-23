import React, {FC, useEffect, useState} from 'react';
import {Typography, Row, Col, Result, Icon, Button} from 'antd';
import {INotice} from 'types/common.type';
import {getAllHighlights, getAllNotices} from 'helpers/api/core.api.helper';
import {NoticeCard} from './noticeCard';
import LoadingScreen from '../../screens/loading.screen';
import {TeamComponent} from './TeamContainer';

interface IProps {}

const {Title} = Typography;

// eslint-disable-next-line react/prop-types
const Notice: FC<IProps> = () => {
  const [loading, setLoading] = useState(true);
  const [allHighlights, setAllHighlights] = useState<Array<INotice>>([]);

  useEffect(() => {
    const getData = async () => {
      const highlights = await getAllHighlights();
      setAllHighlights(highlights);
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
        <Row gutter={32} justify='space-between'>
          <Col sm={24} md={15}>
            <Title className='mx'>HighLights</Title>
            <div className='highlights'>
              <Col span={24}>
                {allHighlights.length > 0 ? (
                  allHighlights.map((details, index) => <NoticeCard highlight {...details} />)
                ) : (
                  <Result
                    icon={<Icon type='smile' theme='twoTone' />}
                    title='We dont have any highLights for now!'
                  />
                )}
              </Col>
            </div>
          </Col>
          <Col sm={24} md={8}>
            <TeamComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Notice;
