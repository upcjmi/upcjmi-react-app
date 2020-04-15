import {IReducerAction} from 'types/common.type';
import {COMPANY_EXTRA_DATA_LOADED} from 'actions';
import {ICompanyExtraDetails} from 'types/company.api.type';

export interface ICompanyState {
  extraDetails?: ICompanyExtraDetails | null;
}

const initialState: ICompanyState = {};

export const company = (state: ICompanyState = initialState, action: IReducerAction) => {
  // eslint-disable-next-line no-undef
  const setState = (override: Partial<ICompanyState>): ICompanyState => ({
    ...state,
    ...override,
  });

  switch (action.type) {
    case COMPANY_EXTRA_DATA_LOADED:
      return setState({extraDetails: action.data});

    default:
      return state;
  }
};
