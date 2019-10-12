import {Dispatch} from 'redux';
import {getStudentExtraDetailsAPI} from 'helpers/api/student.api.helper';
import {openNotificationWithIcon} from 'helpers/notification.helper';
import {STUDENT_EXTRA_DATA_LOADED} from './index';

export const loadStudentExtraDetails = () => async (dispatch: Dispatch) => {
  try {
    const data = await getStudentExtraDetailsAPI();
    dispatch({type: STUDENT_EXTRA_DATA_LOADED, data});
  } catch (e) {
    if (e.status === 404) dispatch({type: STUDENT_EXTRA_DATA_LOADED, data: null});
    else
      openNotificationWithIcon(
        'warning',
        'Unknown error occurred',
        'Try signing out or refreshing page',
      );
  }
};
