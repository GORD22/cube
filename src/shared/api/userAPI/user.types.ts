export interface ILoginData {
  login: string;
  password: string;
}

export interface IUser {
  active: boolean;
  balance: number;
  birthday: Date;
  createdAt: Date;
  currency: string;
  currencyId: number;
  email: string;
  firstName: string;
  id: number;
  isPaymentSystemUser: boolean;
  lastName: string;
  login: string;
  path: string;
  permission: {
    canAddSameRole: boolean;
    canTransaction: boolean;
    canCreateRoles: unknown;
  };
  canAddSameRole: boolean;
  canCreateRoles: unknown;
  canTransaction: boolean;
  phone: string;
  role: string;
  roleId: number;
  secondName: string;
}
