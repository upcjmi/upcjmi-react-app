import {LazyExoticComponent} from 'react';
import {IReduxState} from '../reducers';

export interface IReducerAction {
  type: string;

  [key: string]: any;
}

export interface IDispatchFunction {
  (action: IReducerAction): any;
}

export interface IRoute {
  path: string;
  screen: LazyExoticComponent<any>;
  exact?: boolean;
}

export interface ICarousel {
  image: string;
  caption: string;
}

export interface IGetStateFunction {
  (): IReduxState;
}

export interface IObject {
  [key: string]: any;
}
