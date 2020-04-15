import {Dispatch} from 'redux';
import {GET_ALL_APPLICATIONS, GET_ALL_ROUNDS} from './index';
import {openNotificationWithIcon} from '../helpers/notification.helper';
import {getAllApplications, getAllRounds} from '../helpers/api/company.api.helper';

export const loadAllApplications = (jobId: any) => async (dispatch: Dispatch) => {
  try {
    const data = await getAllApplications(jobId);
    console.log('data', data);
    dispatch({type: GET_ALL_APPLICATIONS, data});
  } catch (e) {
    if (e.status === 404) dispatch({type: GET_ALL_APPLICATIONS, data: null});
    else
      openNotificationWithIcon(
        'warning',
        'Unknown error occurred',
        'Try signing out or refreshing page',
      );
  }
};

export const loadAllRounds = (jobId: any) => async (dispatch: Dispatch) => {
  try {
    const data = await getAllRounds(jobId);
    console.log('rounds', data);
    dispatch({type: GET_ALL_ROUNDS, data});
  } catch (e) {
    if (e.status === 404) dispatch({type: GET_ALL_ROUNDS, data: null});
    else
      openNotificationWithIcon(
        'warning',
        'Unknown error occurred',
        'Try signing out or refreshing page',
      );
  }
};
