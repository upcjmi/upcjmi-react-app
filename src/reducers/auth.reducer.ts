import {IReducerAction} from '../types/common';

interface IAuthState {
  authenticated: boolean;
}

const initialState: IAuthState = {
  authenticated: false,
};

export const auth = (state: IAuthState = initialState, action: IReducerAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
