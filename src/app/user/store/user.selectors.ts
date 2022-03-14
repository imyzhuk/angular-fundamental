import {createFeatureSelector, createSelector} from '@ngrx/store';

import {USER_FEATURE_KEY, UserState} from './user.reducer';

const getUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const getName = createSelector(getUserState, state => state.name);
export const isAdmin = createSelector(getUserState, state => state.isAdmin);

