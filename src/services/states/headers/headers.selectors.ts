import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HeaderState } from './headers.reducers';

export const selectHeaderState = createFeatureSelector<HeaderState>('headers');

export const selectHeaderTitle = createSelector(
  selectHeaderState,
  (state: HeaderState) => {
    return state.title;
  }
);

export const selectHeaderSubtitle = createSelector(
  selectHeaderState,
  (state: HeaderState) => state.subTitle
);
