import {IAllCompany} from 'types/company.api.type';
import {loadSecureUrl} from './main.api.helper';

const UAllCompanies = 'company/';
const UAllAppliedJobs = 'company/applied/jobs/';

export const getAllCompaniesAPI = (): Promise<IAllCompany> => loadSecureUrl(UAllCompanies);
export const getJobBasicDetailsAPI = (company: number): Promise<any> =>
  loadSecureUrl(`company/${company}/job/`);

export const getJobDetailsAPI = (company: number, job: number): Promise<any> =>
  loadSecureUrl(`company/${company}/job/${job}/`);

export const applyToJobAPI = (company: number, job: number, data: any): Promise<any> =>
  loadSecureUrl(`company/${company}/job/${job}/apply/`, {
    method: 'post',
    data,
  });

export const getAllJobsAppliedAPI = (): Promise<any> => loadSecureUrl(UAllAppliedJobs);
