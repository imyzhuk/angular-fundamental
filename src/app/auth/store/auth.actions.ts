import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user-types";

export const requestLogin = createAction(
  'REQUEST_LOGIN',
  props<{ user: User }>()
);

export const requestLoginSuccess = createAction(
  'REQUEST_LOGIN_SUCCESS',
  props<{ token: string }>()
);

export const requestLoginFail = createAction(
  'REQUEST_LOGIN_FAIL',
  props<{ errorMessage: string }>()
);

export const requestLogout = createAction(
  'REQUEST_LOGOUT',
);

export const requestRegister = createAction(
  'REQUEST_REGISTER',
  props<{ user: User }>()
);

export const requestRegisterSuccess = createAction(
  'REQUEST_REGISTER_SUCCESS'
);

export const requestRegisterFail = createAction(
  'REQUEST_REGISTER_FAIL',
  props<{ errorMessage: string }>()
);

export const clearError = createAction(
  'CLEAR_ERROR',
);
