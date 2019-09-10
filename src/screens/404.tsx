import React, {FC} from 'react';
import Result from 'antd/es/result';
import Button from 'antd/es/button';

interface IProps {
  location: any;

  [key: string]: any;
}

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
