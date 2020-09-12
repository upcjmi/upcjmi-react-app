import React, {FC, useEffect, useState} from 'react';
import {Typography, Row, Col,Skeleton} from 'antd';
import {INotice} from 'types/common.type';
import {getAllNotices} from 'helpers/api/core.api.helper';
import {NoticeCard} from './noticeCard';
import {NoticeBoard} from './noticeBoard';

interface IProps {}


const {Title} = Typography;

const Notice: FC<IProps> = () => {
  const [allNotices , setAllNotices ] = useState<Array<INotice>>([])
  useEffect( ()=>{
    const getData  =  async ()=>{
      const data = await getAllNotices();
      setAllNotices(data);
    }
    getData()
  },[allNotices]);

  return (
    <div id='notice' className='container full-page center-hv white lighten-3'>
      <div>
        <Row gutter={32} justify='start'>
          <Col sm={24} md={15}>
            <Title className='mx'>
              HighLights
            </Title>
            <div className='highlights'>
              <Col span={24}>
                {allNotices.length > 0?allNotices.slice(0,5).map((details,index)=>(
                    <NoticeCard {...details} />
                  )):
                  (<Skeleton loading title={{width:'90vw'}} />)}
              </Col>
            </div>
          </Col>
          <Col sm={24} md={8}>
            <NoticeBoard noticesData={allNotices} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Notice;
