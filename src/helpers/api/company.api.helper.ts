import {IAllCompany} from 'types/company.api.type';
import {loadSecureUrl} from './main.api.helper';

const UAllCompanies = 'company/';
const UAllAppliedJobs = 'company/job/applied/';

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

export const saveNewJobAPI = (data: any): Promise<any> =>
  loadSecureUrl(`/company/job/add/`, {
    method: 'post',
    data,
  });
export const allJobsByCompany = (): Promise<any> => loadSecureUrl('/company/job/all/');

export const companyDetail = (id: number): Promise<any> => loadSecureUrl(`/company/${id}/`);

export const getAllApplications = (jobId: number): Promise<any> =>
  loadSecureUrl(`company/job/${jobId}/applications/`);

export const getAllRounds = (jobId: number): Promise<any> =>
  loadSecureUrl(`company/job/${jobId}/rounds/`);
