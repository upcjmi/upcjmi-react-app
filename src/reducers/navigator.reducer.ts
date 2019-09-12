import {IReducerAction, IRoute} from '../types/common.type';
import {COMMON_ROUTES} from '../constants/routes.constant';
import {CONNECTED_WITH_SERVER} from '../actions';

export interface INavigatorState {
  routes: Array<IRoute>;
  connected: boolean;
}

const initialState: INavigatorState = {
  routes: COMMON_ROUTES,
  connected: false,
};

export const navigator = (state: INavigatorState = initialState, action: IReducerAction) => {
  // eslint-disable-next-line no-undef
  const setState = (override: Partial<INavigatorState>): INavigatorState => ({
    ...state,
    ...override,
  });

  switch (action.type) {
    case CONNECTED_WITH_SERVER:
      return setState({connected: true});

    default:
      return state;
  }
};
