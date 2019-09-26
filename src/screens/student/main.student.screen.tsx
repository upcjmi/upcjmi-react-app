import React, {FC, useState, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import {IDispatchFunction} from '../../types/common.type';
import {IReduxState} from '../../reducers';
import {IUserMeta} from '../../types/api.type';
import NotAuthorisedScreen from '../403.screen';
import AccountNotVerifiedScreen from './accountNotVerified.screen';
import {studentRoutes, studentSideRoutes} from '../../constants/studentRoutes.constant';
import SideBar from '../../components/sideBar';
import NotFoundScreen from '../404.screen';
import LoadingScreen from '../loading.screen';
import {selectScreen} from '../../helpers/screen.helper';

interface IStateProps {
  user: IUserMeta | undefined;
  isAuthenticated: boolean;
}

interface IDispatchProps {}

interface IProps extends IStateProps, IDispatchProps {
  match:any
}


const MainStudentScreen: FC<IProps> = (props: IProps) => {
  const {user, isAuthenticated, match} = props;
  const [collapsed, setCollapsed] = useState(selectScreen(true, false));

  const toggle = () => setCollapsed(!collapsed);


  useEffect(() => {
    document.getElementsByTagName('footer')[0].classList.add('footer-hide');

    return () => {
      document.getElementsByTagName('footer')[0].classList.remove('footer-hide');
    }
  });

  if (!isAuthenticated) return <NotAuthorisedScreen />;
  if (user && user.type !== 'S') return <NotAuthorisedScreen />;
  if(user && !user.account.account_verified) return <AccountNotVerifiedScreen user={user} />;

  return (
    <div className='portal'>
      <BrowserRouter basename='/#/student/portal/'>
        <SideBar
          collapsed={collapsed}
          toggle={toggle}
          routes={studentSideRoutes}
          match={match.path}
        />
        <div
          className='full-page'
          style={{
            paddingLeft: selectScreen(0, collapsed? 80 : 256 ),
            transition: '0.4s',
            opacity: collapsed? 1 : selectScreen(0, 1),
          // overflow: 'scroll',
          // height: 'calc(100vh - 64px)'
          }}>
          <Suspense fallback={<LoadingScreen />}>
            <Switch>
              {studentSideRoutes.map((route, index) => (
                <Route
                  key={index.toString()}
                  exact
                  path={route.path}
                  component={route.screen}
                />
              ))}
              {studentRoutes.map((route, index) => (
                <Route
                  key={index.toString()}
                  exact
                  path={route.path}
                  component={route.screen}
                />
              ))}
              <Route component={NotFoundScreen} homeRoute='/#/student/portal/' />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
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
)(withRouter(
  // @ts-ignore
  MainStudentScreen
));
