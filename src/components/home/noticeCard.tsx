import {Link} from 'react-router-dom';
import React from 'react';
import {NOTICE_PATH} from 'constants/routes/main.paths.constant';
import {dateFormatter} from 'helpers/dateFomatter';

export const NoticeCard =({title,details,id,created}: {
  title:string,
  details:string | undefined,
  id:number,
  created:string,
  })=> (
    <div className='card-notice'>
      <Link to={`${NOTICE_PATH}${id}`}>
        <div className='notice-card-title'>
          {title}
        </div>
      </Link>
      <p className='notice-card-details'>
        {details?details.substring(0,256)||details:null}
        {' '}
        {details?<Link to={`${NOTICE_PATH}${id}`} className='read-more'>Read More</Link>:null}
      </p>
      <p className='notice-card-date'>
        {dateFormatter(created)}
      </p>
    </div>
)

