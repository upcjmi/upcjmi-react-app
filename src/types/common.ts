import {LazyExoticComponent} from 'react';

export interface IReducerAction {
  type: string;
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
