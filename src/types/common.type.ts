import {LazyExoticComponent} from 'react';
// import {IReduxState} from 'reducers';

export interface IReducerAction {
  type: string;

  [key: string]: any;
}

// export interface IDispatchFunction {
//   (action: IReducerAction): any;
// }

export interface IRoute {
  path: string;
  screen: LazyExoticComponent<any>;
  exact?: boolean;
  title?: string;
}

export interface ISidebarRoute {
  path: string;
  screen?: LazyExoticComponent<any>;
  icon: string;
  name: string;
  children?: Array<ISidebarRoute>;
}

export interface ICarousel {
  image: string;
  caption: string;
}

// export interface IGetStateFunction {
//   (): IReduxState;
// }

export interface IObject {
  [key: string]: any;
}

export type ISignInOptions = 'E' | 'G' | 'U';

export interface INavigation {
  title: string;
  icon: string;
  component: any;
}


export interface INotice {
  title:string,
  details:string,
  created:string,
  id:number
}


export interface ICoordinator {
  department:string
  email: string
  id: number
  name: string
  phone: string
  photo: string
  type: string
}

export interface IRanking{
  id:number
  issuer:string
  rank:string
  year:number
  heading:string
  link:string
  show_on_site:boolean
  created:string
  modified:string
}
