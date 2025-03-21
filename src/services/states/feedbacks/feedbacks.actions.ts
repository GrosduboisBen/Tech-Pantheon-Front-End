import { createAction, props } from '@ngrx/store';
import { FeedBackCustomResponse } from '../../models';

export const loadUserFeedbacks = createAction(
  '[Feedbacks] Get User Feedbacks',
  props<{ handlerId: string }>()
);

export const loadUserFeedbacksSuccess = createAction(
  '[Feedbacks] Get User Feedbacks Success',
  props<{ feedbacks: FeedBackCustomResponse[] }>()
);

export const loadFeedbacksFailure = createAction(
  '[Feedbacks] Feedbacks load failure',
  props<{ error: any }>()
);
