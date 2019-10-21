import React, {FC} from 'react';
import {Result, Button} from 'antd';
import {Link} from 'react-router-dom';
import {HOME_PATH} from 'constants/routes/main.paths.constant';

interface IProps {}

const InternalErrorScreen: FC<IProps> = () => (
  <div className='full-page center-hv'>
    <Result
      status='500'
      title='500'
      subTitle='Sorry, we encountered some error.'
      extra={(
        <Link to={HOME_PATH}>
          <Button type='primary'>Back Home</Button>
        </Link>
      )}
    />
  </div>
);

export default InternalErrorScreen;
