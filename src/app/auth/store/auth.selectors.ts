import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AUTH_FEATURE_KEY, AuthState} from "./auth.reducer";

const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const isUserAuthorized = createSelector(getAuthState, state => state.isUserAuthorized);
export const isRegistrated = createSelector(getAuthState, state => state.isRegistrated);
export const getToken = createSelector(getAuthState, state => state.token);
export const getSpecificErrorMessage = createSelector(getAuthState, state => state.errorMessage);

