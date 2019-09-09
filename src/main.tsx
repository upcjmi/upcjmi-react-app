import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {IRoute} from './types/common';
import LoadingScreen from './screens/loading.screen';
import NotFoundScreen from './screens/404';

interface IProps {
  routes: Array<IRoute>;
}

const Main = ({routes}: IProps) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, index) => (
        <Route
          exact={route.exact === undefined ? true : route.exact}
          path={route.path}
          component={route.screen}
          key={index.toString()}
        />
      ))}
      <Route component={NotFoundScreen} />
    </Switch>
  </Suspense>
);

const mapStateToProps = (state: any): IProps => ({
  routes: state.navigator.routes,
});
export default connect(mapStateToProps)(Main);
