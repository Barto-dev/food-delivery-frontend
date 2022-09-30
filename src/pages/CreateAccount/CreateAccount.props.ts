import { UserRole } from '../../apolloHooks';

export interface ICreateAccountForm {
  email: string;
  password: string;
  role: UserRole
}

