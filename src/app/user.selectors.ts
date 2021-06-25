import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';

const getUserFeatureState = createFeatureSelector<State>('usersState');

export const getUser = createSelector(
    getUserFeatureState,
    state => state.users
)
export const getError = createSelector(
    getUserFeatureState,
    state => state.error
)
export const getLoading =  createSelector(
    getUserFeatureState,
    state => state.loading 
)
export const getLoaded =  createSelector(
    getUserFeatureState,
    state => state.loaded
)
// export const getLoaded = (state: UserReducerState) => state.loaded;
// export const getUserLoading = createSelector(
//     getUserFeatureState,
//     // state => state.
// )

