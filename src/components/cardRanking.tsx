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
        style={{ width: '16rem',borderRadius:'2rem',textAlign:'center'}}
    >
        <Title level={2} className='m-0 p-0'>
          {rank}
        </Title>
        <Title level={4} className='m-0 p-0'>{heading}</Title>
        <br />
        <p
          className='m-0'>
          {`${issuer} ${year}`}
        </p>
      </Card>
    </a>
  )
}
