import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrentUserState, UserState } from './users.reducers';

export const selectAllUserState = createFeatureSelector<UserState>('users');
export const selectedUserState =
  createFeatureSelector<CurrentUserState>('singleUser');
export const selectAllUsers = createSelector(
  selectAllUserState,
  state => state.users
);

export const selectUserPagination = createSelector(
  selectAllUserState,
  state => ({
    total: state.total,
    page: state.page,
    pageSize: state.pageSize,
  })
);

export const selectCurrentUser = createSelector(selectedUserState, state => ({
  ...state,
}));

export const selectUserByName = (name: string) =>
  createSelector(selectAllUserState, state =>
    state.users.find(user => user.name === name)
  );
export const selectUserError = createSelector(
  selectAllUserState,
  state => state.error
);

export const selectUserLoading = createSelector(
  selectAllUserState,
  state => state.loading
);
