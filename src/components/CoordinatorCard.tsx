import {Card, Icon, Tooltip,Typography} from 'antd';
import React from 'react';
import {ICoordinator} from '../types/common.type';
import {getCourseName} from '../helpers/courses';

const {Title} = Typography

export const CoordinatorCard = ({department,email,name,phone,photo,type}:ICoordinator) =>{
  const desc = type==='S'?'Student Coordinator':'Teacher Coordinator';
  return (
    <Card
      style={{ width: 300,margin:10 }}
      cover={(
        <img
          alt={name}
          src={photo}
        />
      )}
    >
      <Title level={4}>{name}</Title>
      <p className='m-0'>{desc}</p>
      <p className='m-0'>{getCourseName(department)}</p>
      <br />
      <div className='row'>
        <Tooltip placement='topLeft' trigger='click' title={email}>
          <Icon type='mail' key='mail' style={{fontSize:20}} />
        </Tooltip>
        <Tooltip placement='topLeft' trigger='click' title={phone}>
          <Icon type='phone' key='phone' className='mx' style={{fontSize:20}} />
        </Tooltip>
      </div>
    </Card>
  )
}
