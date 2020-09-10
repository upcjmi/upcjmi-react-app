import {Card ,Typography} from 'antd';
import React from 'react';
import {IRanking} from 'types/common.type';
import {dateFormatter} from 'helpers/dateFomatter';

const {Title} = Typography
const {Meta} = Card;

export const CardRanking = ({
  issuer,
  rank,
  year,
  heading,
  link,
  created,
}:IRanking ) =>{
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={link} target='_blank'>
      <Card
        style={{ width: '16rem',margin:10 ,borderRadius:'2rem'}}
    >
        <Meta
          title={(
            <Title level={2} style={{textAlign:'center',margin:0}}>
              {rank}
            </Title>
)}
          description={(
            <div>
              <Title level={4} className='m-0' style={{margin:0}}>{heading}</Title>
              <p className='m-0'>{`${issuer} ${year}`}</p>
              <p className='m-0'>{dateFormatter(created)}</p>
            </div>
        )}
      />
      </Card>
    </a>
  )
}
