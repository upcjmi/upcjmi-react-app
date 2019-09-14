export interface IEmailAccount {
  type: 'E';
  email: string;
  password: string;
  confirm: string;
}

export interface IGoogleAccount {
  type: 'G';
  id: string;
  token: string;
  email: string;
}

export interface ITempFile {
  uid: string;
  id: string;
}

export interface IBasicStudentSignUpData {
  name: string;
  roll: string;
  student_id: string | number;
  course: string;
  year: string;
  documents: Array<ITempFile>;
  captcha: string;
}

export interface ISignUpData {
  account?: IEmailAccount | IGoogleAccount | {};
  // eslint-disable-next-line no-undef
  basic?: Partial<IBasicStudentSignUpData>;
}
