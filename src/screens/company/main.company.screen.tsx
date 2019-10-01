import React, {FC} from 'react';
import Portal from 'components/portal';
import {
  companyExtraRoutes,
  companySideRoutes,
} from 'constants/routes/company.routes.constant';

interface IProps {
}


const MainCompanyScreen: FC<IProps> = () => (
  // @ts-ignore
  <Portal
    sideRoutes={companySideRoutes}
    extraRoutes={companyExtraRoutes}
    baseLocation='/#/portal/company/'
    allowedType='C'
  />
);


export default MainCompanyScreen;
