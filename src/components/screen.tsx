import React, {FC, useEffect, Suspense} from 'react';
import LoadingScreen from '../screens/loading.screen';

interface IProps {
  title: string | undefined;
  screen: any;
}

const Screen: FC<IProps> = ({title, screen: ScreenComponent}: IProps) => {
  useEffect(() => {
    document.title = title || 'University Placement Cell, Jamia Millia Islamia';
  }, [title]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ScreenComponent />
    </Suspense>
  );
};

export default Screen;
