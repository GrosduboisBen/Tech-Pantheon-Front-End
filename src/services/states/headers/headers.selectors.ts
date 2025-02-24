import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HeaderState } from './headers.reducers';

export const selectHeaderState = createFeatureSelector<HeaderState>('header');

export const selectHeaderTitle = createSelector(
  selectHeaderState,
  (state: HeaderState) => state.title
);

export const selectHeaderSubtitle = createSelector(
  selectHeaderState,
  (state: HeaderState) => state.subTitle
);
