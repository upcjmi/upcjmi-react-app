import {Card, Icon, Avatar,Tooltip,Typography} from 'antd';
import React from 'react';
import {ICoordinator} from '../types/common.type';
import {getCourseName} from '../helpers/courses';

const {Title} = Typography
const {Meta} = Card;

export const CoordinatorCard = ({department,email,name,phone,photo,type}:ICoordinator) =>{
  const desc = type==='S'?'Student Coordinator':'Teacher Coordinator';
  return (
    <Card
      style={{ width: 300,margin:10 }}
    >
      <Meta
        avatar={<Avatar src={photo} />}
        title={<Title level={4}>{name}</Title>}
        description={(
          <div>
            <p className='m-0'>{desc}</p>
            <p className='m-0'>{getCourseName(department)}</p>
            <p className='m-0'>{phone}</p>
            <p className='m-0'>{email}</p>
          </div>
)}
      />
    </Card>
  )
}
