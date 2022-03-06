import {UserRoles} from "./user-types";

export type Response<T> = {
  successful: boolean;
  result: T;
};

export type LoginResponse = {
  successful: boolean;
  result: string;
  user: {
    name: string;
    email: string
  }
}
export type ErrorResponse = {
  error: {
    successful: boolean;
    errors: string[]
  }
}

export type SuccessfulRegistrationResponse = Response<string>

export type UserResponse = Response<{
  name: string;
  email: string;
  password: string;
  role: UserRoles;
  id: string
}>
