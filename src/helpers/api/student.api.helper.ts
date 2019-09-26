import {loadSecureUrl} from './loader.api.helper';
import {IStudentExtraDetails} from '../../types/student.api.type';

const UStudentExtraDetails = '/student/extra-details/';

export const getStudentExtraDetailsAPI = (): Promise<IStudentExtraDetails> =>
  loadSecureUrl(UStudentExtraDetails);


export const saveStudentExtraDataAPI =
   (data: IStudentExtraDetails, action: string): Promise<IStudentExtraDetails> =>
     loadSecureUrl(UStudentExtraDetails, {
       method: action === 'edit'? 'patch' : 'post',
       data
     });
