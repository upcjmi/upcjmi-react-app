import {IReducerAction, IRoute} from '../types/common';
import {COMMON_ROUTES} from '../constants/routes.constant';

interface INavigatorState {
  routes: Array<IRoute>;
}

const initialState: INavigatorState = {
  routes: COMMON_ROUTES,
};

export const navigator = (state: INavigatorState = initialState, action: IReducerAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
