export interface User{
  name: string;
  email: string;
  password: string;
}

export interface Author{
  name: string;
  id: string;
}

export enum UserRoles {
  admin = 'admin',
  user = 'user',
}
