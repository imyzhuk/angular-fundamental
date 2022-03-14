import {ActionReducerMap} from "@ngrx/store";
import authReducer, {AUTH_FEATURE_KEY, AuthState} from "../auth/store/auth.reducer";
import userReducer, {USER_FEATURE_KEY, UserState} from "../user/store/user.reducer";
import {AuthEffects} from "../auth/store/auth.effects";
import {UserEffects} from "../user/store/user.effects";

export type State = {
  [AUTH_FEATURE_KEY]: AuthState,
  [USER_FEATURE_KEY]: UserState
}

export const reducers: ActionReducerMap<State> = {
  [AUTH_FEATURE_KEY]: authReducer,
  [USER_FEATURE_KEY]: userReducer
};

export const effects = [AuthEffects, UserEffects];
