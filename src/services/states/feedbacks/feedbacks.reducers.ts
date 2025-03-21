import { createReducer, on } from '@ngrx/store';
import * as FeedbacksActions from './feedbacks.actions';
import { FeedBackCustomResponse } from '../../models';
import * as lodash from 'lodash';
export interface FeedbackState {
  feedbacks: FeedBackCustomResponse[];
  total: number;
  averageRating: number;
}

export const initialState: FeedbackState = {
  feedbacks: [],
  total: 0,
  averageRating: 0,
};

export const feedbackReducer = createReducer(
  initialState,
  on(FeedbacksActions.loadUserFeedbacksSuccess, (state, { feedbacks }) => ({
    ...state,
    feedbacks: feedbacks,
    total: feedbacks.length,
    averageRating: lodash.mean(
      feedbacks.map(f => {
        return f.rating;
      })
    ),
  }))
);
