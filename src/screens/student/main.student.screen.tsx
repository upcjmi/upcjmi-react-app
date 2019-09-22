import React, {FC, useState, Suspense} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import {IDispatchFunction} from '../../types/common.type';
import {IReduxState} from '../../reducers';
import {IUserMeta} from '../../types/api.type';
import NotAuthorisedScreen from '../403.screen';
import AccountNotVerifiedScreen from './accountNotVerified.screen';
import {studentRoutes} from '../../constants/studentRoutes.constant';
import SideBar from '../../components/sideBar';
import NotFoundScreen from '../404.screen';
import LoadingScreen from '../loading.screen';

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
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  if (!isAuthenticated) return <NotAuthorisedScreen />;
  if (user && user.type !== 'S') return <NotAuthorisedScreen />;
  if(user && !user.account.account_verified) return <AccountNotVerifiedScreen user={user} />;

  return (
    <div className='full-page'>
      <BrowserRouter basename='/#/student/portal/'>
        <SideBar collapsed={collapsed} toggle={toggle} routes={studentRoutes} match={match.path} />
        <div style={{paddingLeft: collapsed? 70: 256, transition: '0.2s'}}>
          <Suspense fallback={<LoadingScreen />}>
            <Switch>
              {studentRoutes.map((route, index) => (
                <Route
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
