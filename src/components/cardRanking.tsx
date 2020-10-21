import {Card, Typography} from 'antd';
import React from 'react';
import {IRanking} from 'types/common.type';
import {dateFormatter} from 'helpers/dateFomatter';

const {Title} = Typography;
const {Meta} = Card;

export const CardRanking = ({issuer, rank, year, heading, link, created}: IRanking) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={link} target='_blank'>
      <Card style={{paddingTop: '5px', textAlign: 'center', borderRadius: 15, width: '20vw'}}>
        <Title level={2} style={{padding: 0, margin: 0}}>
          {rank}
        </Title>
        <Title level={4} style={{padding: 0, margin: 0}}>
          {heading}
        </Title>
        <p className='m-0'>{`${issuer} ${year}`}</p>
      </Card>
    </a>
  );
};
