export interface IPing {
  details: 'pong';
}

export interface IUserMeta {
  name: string;
  email: string;
  type: 'S' | 'C';
}

export interface ISignInToken {
  token: {
    refresh: string;
    access: string;
    expires: number;
  };
  user: IUserMeta;
}

export interface IAccessToken {
  access: string;
  expires: number;
}

export interface IGoogleSignInResponseHacked {
  tokenId: string;
  googleId: string;

  profileObj: {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
  };

  [key: string]: any;
}
