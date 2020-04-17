import {IStudentExtraDetails, IReusmeData} from 'types/student.api.type';

import {loadSecureUrl} from './main.api.helper';

const UStudentExtraDetails = '/student/extra-details/';

const UResume = '/student/resume/';
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

export const getStudentResume = (): Promise<any> => loadSecureUrl(UResume);
export const updateStudnetResume = (data: any): Promise<any> =>
  loadSecureUrl(UResume, {
    method: 'post',
    data,
  });
