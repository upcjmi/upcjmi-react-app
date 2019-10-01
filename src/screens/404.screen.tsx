import React, {FC} from 'react';
import {Result, Button} from 'antd';
import {Link} from 'react-router-dom';
import {HOME_PATH} from 'constants/routes/main.paths.constant';

interface IProps {}

const NotFoundScreen: FC<IProps> = () => (
  <div className='full-page center-hv'>
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={(
        <Link to={HOME_PATH}>
          <Button type='primary'>Back Home</Button>
        </Link>
)}
    />
  </div>
);

export default NotFoundScreen;
