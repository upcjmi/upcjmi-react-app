export interface ICompany {
  id: number;
  name: string;
}
export interface ICompanyExtraDetails {
  name: string;
  about: string;
}
export type IAllCompany = Array<ICompany>;
