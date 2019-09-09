import {IReducerAction, IRoute} from '../types/common';
import {commonRoutes} from '../constants/routes';

interface INavigatorState {
  routes: Array<IRoute>;
}

const initialState: INavigatorState = {
  routes: commonRoutes,
};

export const navigator = (state: INavigatorState = initialState, action: IReducerAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
