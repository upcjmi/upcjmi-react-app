import React, {FC} from 'react';
import Portal from '../../components/portal';
import {studentExtraRoutes,
  studentSideRoutes} from '../../constants/routes/student.routes.constant';

interface IProps {
}


const MainStudentScreen: FC<IProps> = () => (
  // @ts-ignore
  <Portal
    sideRoutes={studentSideRoutes}
    extraRoutes={studentExtraRoutes}
    baseLocation='/#/portal/student/'
    allowedType='S'
  />
);


export default MainStudentScreen;
