import React, {FC} from 'react';
import Portal from 'components/portal';
import {companyExtraRoutes, companySideRoutes} from 'constants/routes/company.routes.constant';
import {COMPANY_PORTAL_HOME_PATH} from 'constants/routes/main.paths.constant';

interface IProps {}

const MainCompanyScreen: FC<IProps> = () => (
  // @ts-ignore
  <Portal
    sideRoutes={companySideRoutes}
    extraRoutes={companyExtraRoutes}
    baseLocation={COMPANY_PORTAL_HOME_PATH}
    allowedType='C'
  />
);

export default MainCompanyScreen;
