import React, {FC} from 'react';
import Portal from 'components/portal';
import {studentExtraRoutes, studentSideRoutes} from 'constants/routes/student.routes.constant';
import {STUDENT_PORTAL_HOME_PATH} from '../../constants/routes/main.paths.constant';

interface IProps {}

const MainStudentScreen: FC<IProps> = () => (
  // @ts-ignore
  <Portal
    sideRoutes={studentSideRoutes}
    extraRoutes={studentExtraRoutes}
    baseLocation={STUDENT_PORTAL_HOME_PATH}
    allowedType='S'
  />
);

export default MainStudentScreen;
