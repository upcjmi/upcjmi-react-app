import {Link} from 'react-router-dom';
import React from 'react';
import {NOTICE_PATH} from '../../constants/routes/main.paths.constant';


export const NoticeCard =({title,content,id}: {
  title:string,
  content:string | undefined,
  id:number})=> (
    <div className='card-notice'>
      <Link to={`${NOTICE_PATH}${id}`}>
        <div className='notice-card-title'>
          {title}
        </div>
      </Link>
      <p className='notice-card-details'>
        {content?content.substring(0,256)||content:null}
        {' '}
        {content?<Link to={`${NOTICE_PATH}${id}`} className='read-more'>Read More</Link>:null}
      </p>
      <p className='notice-card-date'>
      July 20, 2020
      </p>
    </div>
)

