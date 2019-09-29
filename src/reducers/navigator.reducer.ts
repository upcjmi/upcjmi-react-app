import {IReducerAction, IRoute} from '../types/common.type';
import {COMMON_ROUTES} from '../constants/routes/main.routes.constant';
import {CONNECTED_WITH_SERVER, COULD_NOT_CONNECT_TO_SERVER} from '../actions';

export interface INavigatorState {
  routes: Array<IRoute>;
  connected: boolean | null;
}

const initialState: INavigatorState = {
  routes: COMMON_ROUTES,
  connected: null,
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
    case COULD_NOT_CONNECT_TO_SERVER:
      return setState({connected: false});

    default:
      return state;
  }
};
