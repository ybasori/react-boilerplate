export interface IAuthData {
  name: string;
  token: string;
  expires: number;
}

export interface IInitialState {
  authData: IAuthData | null;
  loading: boolean;
  error: string | null;
}
