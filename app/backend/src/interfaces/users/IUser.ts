import { Identifiable } from '..';

export interface ILogin extends Identifiable {
  email: string;
  password: string;
}

export interface IUser extends Identifiable, ILogin {
  username: string;
  role: string;
}
