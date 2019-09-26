import {IReducerAction} from '../types/common.type';
import {STUDENT_EXTRA_DATA_LOADED} from '../actions';
import {IStudentExtraDetails} from '../types/student.api.type';

export interface IStudentState {
  extraDetails?: IStudentExtraDetails | null;
}

const initialState: IStudentState = {
};

export const student = (state: IStudentState = initialState, action: IReducerAction) => {
  // eslint-disable-next-line no-undef
  const setState = (override: Partial<IStudentState>): IStudentState => ({
    ...state,
    ...override,
  });

  switch (action.type) {
    case STUDENT_EXTRA_DATA_LOADED:
      return setState({extraDetails: action.data});

    default:
      return state;
  }
};
