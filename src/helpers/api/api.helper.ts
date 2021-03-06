import {IEmail, IPing, ISignInToken, IUserExists, IUserMeta} from 'types/api.type';
import {ISignUpData} from 'types/signUp.type';
import {IContactForm} from 'types/apiData.types';
import {loadOpenUrl, loadSecureUrl} from './main.api.helper';

const UPing = 'ping/';

const USignInWithEmail = 'auth/sign-in/email/';
const USignInWithGoogle = 'auth/sign-in/google/';

const USignUpStudent = 'student/sign-up/';
const USignUpCompany = 'company/sign-up/';

const UContact = 'contact/';

const UUserMetaDetails = 'auth/user/meta/';
const UUserExits = 'auth/user/exists/';
const UVerifyEmail = 'auth/verify/email/';
const USendVerificationMail = 'auth/verify/email/send/';

const ForgetPasswordReqOTP = '/auth/reset-password/send/';
const ResetPassword = '/auth/reset-password/';

export const pingAPI = (): Promise<IPing> => loadOpenUrl(UPing);

export const signUpStudentAPI = (data: ISignUpData) =>
  loadOpenUrl(USignUpStudent, {
    method: 'post',
    data,
  });

export const signUpCompanyAPI = (data: ISignUpData) =>
  loadOpenUrl(USignUpCompany, {
    method: 'post',
    data,
  });

export const signInWithEmailAPI = (email: string, password: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithEmail, {
    method: 'post',
    data: {email, password},
  });
export const signInWithGoogleAPI = (id: string, token: string): Promise<ISignInToken> =>
  loadOpenUrl(USignInWithGoogle, {
    method: 'post',
    data: {id, token},
  });

export const contactFormAPI = (data: IContactForm): Promise<any> =>
  loadOpenUrl(UContact, {
    method: 'post',
    data,
  });

export const getUserMetaDetailAPI = (): Promise<IUserMeta> => loadSecureUrl(UUserMetaDetails);

export const doesUserExistsAPI = (email: string): Promise<IUserExists> =>
  loadOpenUrl(UUserExits, {
    params: {
      email,
    },
  });

export const verifyEmailAPI = (hash: string): Promise<IEmail> =>
  loadOpenUrl(UVerifyEmail, {
    method: 'post',
    data: {hash},
  });

export const requestForgetPasswordOTP = (email: any) =>
  loadOpenUrl(ForgetPasswordReqOTP, {
    method: 'post',
    data: {email},
  });

export const resetPasswordOTP = (obj: any) =>
  loadOpenUrl(ResetPassword, {
    method: 'post',
    data: obj,
  });

export const resendVerificationMailAPI = (): Promise<void> => loadSecureUrl(USendVerificationMail);
