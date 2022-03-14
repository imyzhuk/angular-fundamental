import {createAction, props} from "@ngrx/store";

export const requestCurrentUser = createAction(
  'REQUEST_CURRENT_USER'
);

export const requestCurrentUserSuccess = createAction(
  'REQUEST_CURRENT_USER_SUCCESS',
  props<{ name: string, isAdmin: boolean }>()
);

export const requestCurrentUserFail = createAction(
  'REQUEST_CURRENT_USER_FAIL',
  props<{ error: string }>()
);
export const clearUserInfo = createAction(
  'CLEAR_USER_INFO',
);
