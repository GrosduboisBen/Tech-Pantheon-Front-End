import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CdnAuthState, CdnFilesState } from './cdn-services.reducers';

// Selectors for Authentication State
export const selectAuthState = createFeatureSelector<CdnAuthState>('auth');

export const selectAuthToken = createSelector(
  selectAuthState,
  state => state.token
);

export const selectAuthLoginError = createSelector(
  selectAuthState,
  state => state.loginError
);

export const selectAuthRegisterError = createSelector(
  selectAuthState,
  state => state.registerError
);

// Selectors for File Management State
export const selectFilesState = createFeatureSelector<CdnFilesState>('files');

export const selectFiles = createSelector(
  selectFilesState,
  state => state.files
);

export const selectFilesLoading = createSelector(
  selectFilesState,
  state => state.loading
);

export const selectFilesError = createSelector(
  selectFilesState,
  state => state.error
);
