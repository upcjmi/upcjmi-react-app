import React, {FC} from 'react';
import {Result, Button} from 'antd';

interface IProps {}

const NotFoundScreen: FC<IProps> = () => (
  <div className="full-page center-hv">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  </div>
);

export default NotFoundScreen;
