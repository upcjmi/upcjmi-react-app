import {Dispatch} from 'redux';
import {IGetStateFunction} from '../types/common.type';
import {getStudentExtraDetailsAPI} from '../helpers/api/student.api.helper';
import {STUDENT_EXTRA_DATA_LOADED} from './index';
import {openNotificationWithIcon} from '../helpers/notification.helper';

export const loadStudentExtraDetails = () =>
  // eslint-disable-next-line
  async (dispatch: Dispatch, getState: IGetStateFunction) => {
    try{
      const data = await getStudentExtraDetailsAPI();
      dispatch({type: STUDENT_EXTRA_DATA_LOADED, data})
    } catch (e) {
      if(e.status === 404)
        dispatch({type: STUDENT_EXTRA_DATA_LOADED, data: null});
      else
        openNotificationWithIcon(
          'warning',
          'Unknown error occurred',
          'Try signing out or refreshing page'
        )
    }
  };
