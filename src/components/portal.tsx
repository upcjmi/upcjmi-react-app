import React, {FC, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Link, Route, Switch, withRouter} from 'react-router-dom';
import {Button, Icon, Menu, Result} from 'antd';

import {IRoute, ISidebarRoute} from 'types/common.type';
import {IReduxState} from 'reducers';
import {IUserMeta} from 'types/api.type';
import NotAuthorisedScreen from 'screens/403.screen';
import AccountNotVerifiedScreen from 'screens/accountNotVerified.screen';
import NotFoundScreen from 'screens/404.screen';
import LoadingScreen from 'screens/loading.screen';
import {selectScreen} from 'helpers/screen.helper';
import SideBar from './portalNavigator';
import {HOME_PATH, RESUME_BUILDER} from '../constants/routes/main.paths.constant';
import {cannotConnectToServerNotification} from '../helpers/notification.helper';

interface IStateProps {
  user: IUserMeta | undefined;
  isAuthenticated: boolean;
  connected: boolean | null;
}

interface IProps extends IStateProps {
  match: any;
  sideRoutes: Array<ISidebarRoute>;
  extraRoutes: Array<IRoute>;
  baseLocation: string;
  allowedType: 'C' | 'S';
}

const Portal: FC<IProps> = (props: IProps) => {
  const {
    user,
    isAuthenticated,
    match,
    allowedType,
    extraRoutes,
    sideRoutes,
    baseLocation = '/portal/',
    connected,
  } = props;

  useEffect(() => {
    document.getElementsByTagName('footer')[0].classList.add('footer-hide');

    return () => {
      document.getElementsByTagName('footer')[0].classList.remove('footer-hide');
    };
  });

  if (connected === null) return <LoadingScreen />;

  if (!connected) {
    cannotConnectToServerNotification();
    return (
      <div className='full-page center-hv'>
        <Result
          status='500'
          subTitle='Could not connect to server, try refreshing the page'
          extra={(
            <Link to={HOME_PATH}>
              <Button type='primary'>Home</Button>
            </Link>
          )}
        />
      </div>
    );
  }

  if (!isAuthenticated) return <NotAuthorisedScreen />;
  if (user && user.type !== allowedType) return <NotAuthorisedScreen />;
  if (user && !(user.account.account_verified && user.account.email_verified))
    return <AccountNotVerifiedScreen user={user} />;
  const ResumeButton = (
    <Menu.Item key='resume'>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={RESUME_BUILDER} target='_blank'>
        <Icon type='solution' />
        <span>Resume Builder</span>
      </a>
    </Menu.Item>
  )
  return (
    <>
      <div className='portal'>
        <BrowserRouter basename={baseLocation}>
          <SideBar
            routes={sideRoutes}
            match={match.path}
            extra={ResumeButton} />
          <div
            className='full-page'
            style={{
              paddingLeft: selectScreen(0, 80,140,140),
              transition: '0.4s',
            }}>
            <Suspense fallback={<LoadingScreen />}>
              <Switch>
                {sideRoutes.map((route, index) => (
                  <Route key={index.toString()} exact path={route.path} component={route.screen} />
                ))}
                {extraRoutes.map((route, index) => (
                  <Route key={index.toString()} exact path={route.path} component={route.screen} />
                ))}
                <Route component={NotFoundScreen} homeRoute={baseLocation} />
              </Switch>
            </Suspense>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

const mapStateToProps = (state: IReduxState): IStateProps => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  connected: state.navigator.connected,
});

export default connect(mapStateToProps)(
  withRouter(
    // @ts-ignore
    Portal,
  ),
);
