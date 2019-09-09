import React, {FC} from 'react';

interface IProps {
  location: any;

  [key: string]: any;
}

const NotFoundScreen: FC<IProps> = () => <h1>404: Page you are looking for does not exists</h1>;

export default NotFoundScreen;
