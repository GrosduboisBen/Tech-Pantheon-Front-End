import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FeedbackState } from './feedbacks.reducers';

export const selectFeedbackState =
  createFeatureSelector<FeedbackState>('feedbacks');

export const selectFeedbacks = createSelector(
  selectFeedbackState,
  (state: FeedbackState) => {
    return state;
  }
);
