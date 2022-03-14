import {createReducer, on} from "@ngrx/store";
import {clearUserInfo, requestCurrentUserFail, requestCurrentUserSuccess} from "./user.actions";

export const USER_FEATURE_KEY = 'user';
let initialState = {
  isAdmin: false,
  name: null as string | null,
  error: null as string | null,
};

export type UserState = typeof initialState;

const reducer = createReducer(
  initialState,
  on(requestCurrentUserSuccess, (state, {name, isAdmin}) => ({...state, name, isAdmin})),
  on(requestCurrentUserFail, (state, {error}) => ({...state, error})),
  on(clearUserInfo, (state) => ({...state, name: null, isAdmin: false})),
)

const userReducer = (state: UserState = initialState, action: any): UserState => reducer(state, action);

export default userReducer;
