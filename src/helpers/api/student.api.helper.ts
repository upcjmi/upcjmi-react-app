import {IStudentExtraDetails} from 'types/student.api.type';

import {loadSecureUrl} from './main.api.helper';

const UStudentExtraDetails = '/student/extra-details/';

export const getStudentExtraDetailsAPI = (): Promise<IStudentExtraDetails> =>
  loadSecureUrl(UStudentExtraDetails);

export const getStudentExtraDetailsWithId = (id: number): Promise<IStudentExtraDetails> =>
  loadSecureUrl(`${UStudentExtraDetails}${id}/`);

export const saveStudentExtraDataAPI = (
  data: IStudentExtraDetails,
  action: string,
): Promise<IStudentExtraDetails> =>
  loadSecureUrl(UStudentExtraDetails, {
    method: action === 'edit' ? 'patch' : 'post',
    data,
  });
