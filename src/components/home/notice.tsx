import React, {FC, useEffect, useState} from 'react';
import {Typography, Row, Col,Icon} from 'antd';
import {NoticeCard} from './noticeCard';
import {getAllNotices} from '../../helpers/api/core.api.helper';
import {NoticeBoard} from './noticeBoard';

interface IProps {}

const {Title} = Typography;

const noticesData = [
  {
    name:'Result of Senior School Certificate Class-XII (Commerce) (Regular)',
    content:'All the students are hereby informed that result of class XIII regular is declared.' +
      'All the students are hereby informed that result of class XIII regular is declared.' +
      'All the students are hereby informed that result of class XIII regular is declared.' +
      'All the students are hereby informed that result of class XIII regular is declared.' +
      'All the students are hereby informed that result of class XIII regular is declared.' +
      'All the students are hereby informed that result of class XIII regular is declared.' +
      'All the students are hereby informed that result of class XIII regular is declared.' +
      'All the students are hereby informed that result of class XIII regular is declared.'
  },
  {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  }, {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  },
  {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  },{
    name:'Result of Senior School Certificate Class-XII (Commerce) (Regular)',
    content:'All the students are hereby informed that result of class XIII regular is declared.'
  },
  {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  }, {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  },
  {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  },{
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  },{
    name:'Result of Senior School Certificate Class-XII (Commerce) (Regular)',
    content:'All the students are hereby informed that result of class XIII regular is declared.'
  },
  {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  }, {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  },
  {
    name:'Result of Senior School Certificate Class-XII(Commerce)(Regular)',
  },
];

// const Highlight=({title,content}:{title:string,content:string | undefined})=>(
//   <Row>
//     <Col span={1}>
//       <Icon type='link' />
//     </Col>
//     <Col>
//       <text className='highlight-text'>{title}</text>
//     </Col>
//   </Row>
// )

const Notice: FC<IProps> = () => {
  const [allNotices , setAllNotices ] = useState({})
  useEffect( ()=>{
    const getData  =  async ()=>{
      const data = await getAllNotices();
      setAllNotices(data);
    }
    getData().then(()=>{
      console.log(allNotices,"ye");
    }).catch((e)=>{
      console.error("ye wala",e)
    });
  },[])
  return (
    <div id='notice' className='container full-page center-hv white lighten-3'>
      <div>
        <Row gutter={32}>
          <Col sm={24} md={15}>
            <Title className='mx'>
              HighLights
            </Title>
            <div className='highlights'>
              {noticesData.map((details,index)=>(
                <Col span={24}>
                  <NoticeCard {...{title:details.name,content:details.content,id:index+1}} />
                </Col>
              ))}
            </div>
          </Col>
          <Col sm={24} md={8}>
            <NoticeBoard noticesData={noticesData} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Notice;
