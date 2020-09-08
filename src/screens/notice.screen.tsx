import React from 'react';
import {Typography, Row, Col,Button, Icon} from 'antd';
import {NoticeBoard} from 'components/home/noticeBoard';

const {Title, Paragraph} = Typography;


const dummyData = [
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

export const NoticeScreen = () => {
  return (
    <div className='container full-page  white lighten-3'>
      <Row gutter={32}>
        <Col sm={24} md={15}>
          <Title level={2}>
            Result of Senior School Certificate Class-XII (Commerce) (Regular)
          </Title>
          <Paragraph>
            All the students are hereby informed that result of class XIII regular is declared.
            All the students are hereby informed that result of class XIII regular is declared.
            All the students are hereby informed that result of class XIII regular is declared.
            All the students are hereby informed that result of class XIII regular is declared.
            All the students are hereby informed that result of class XIII regular is declared.
            All the students are hereby informed that result of class XIII regular is declared.
            All the students are hereby informed that result of class XIII regular is declared.
            All the students are hereby informed that result of class XIII regular is declared.
          </Paragraph>
          <div className='row space-between'>
            <Button type='primary' icon='download'>
                Attachment
            </Button>
            <p>
          July 20, 2020
            </p>
          </div>
          <Button type='link' size='large' style={{padding:0}}>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target='_blank' href='https://www.facebook.com/ashertoufeeq'>www.facebook.com</a>
          </Button>
        </Col>
        <Col sm={24} md={8}>
          <NoticeBoard noticesData={dummyData} />
        </Col>
      </Row>
    </div>
  );
};

export default NoticeScreen;
