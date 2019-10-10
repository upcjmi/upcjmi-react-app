import React, {FC, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import {IDispatchFunction, IRoute, ISidebarRoute} from 'types/common.type';
import {IReduxState} from 'reducers';
import {IUserMeta} from 'types/api.type';
import NotAuthorisedScreen from 'screens/403.screen';
import AccountNotVerifiedScreen from 'screens/accountNotVerified.screen';
import NotFoundScreen from 'screens/404.screen';
import LoadingScreen from 'screens/loading.screen';
import {selectScreen} from 'helpers/screen.helper';
import SideBar from './portalNavigator';

interface IStateProps {
  user: IUserMeta | undefined;
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
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
  } = props;

  useEffect(() => {
    document.getElementsByTagName('footer')[0].classList.add('footer-hide');

    return () => {
      document.getElementsByTagName('footer')[0].classList.remove('footer-hide');
    };
  });

  if (!isAuthenticated) return <NotAuthorisedScreen />;
  if (user && user.type !== allowedType) return <NotAuthorisedScreen />;
  if (user && !(user.account.account_verified && user.account.email_verified))
    return <AccountNotVerifiedScreen user={user} />;

  return (
    <>
      <div className='portal'>
        <BrowserRouter basename={baseLocation}>
          <SideBar routes={sideRoutes} match={match.path} />
          <div
            className='full-page'
            style={{
              paddingLeft: selectScreen(0, 80),
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
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: IDispatchFunction): IDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withRouter(
    // @ts-ignore
    Portal,
  ),
);
