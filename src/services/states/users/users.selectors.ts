import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.reducers';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  state => state.users
);

export const selectUserPagination = createSelector(
  selectUserState,
  state => ({
    total: state.total,
    page: state.page,
    pageSize: state.pageSize,
  }) // Sélecteur pour la pagination
);

export const selectUserById = (id: string) =>
  createSelector(selectUserState, state =>
    state.users.find(user => user.id === id)
  );

export const selectUserError = createSelector(
  selectUserState,
  state => state.error
);

export const selectUserLoading = createSelector(
  selectUserState,
  state => state.loading
);
