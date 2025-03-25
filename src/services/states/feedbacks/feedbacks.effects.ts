import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FeedbacksActions from './feedbacks.actions';
import * as UserActions from '../users/users.actions';
import { select, Store } from '@ngrx/store';
import { CurrentUserState } from '../users/users.reducers';
import { FeedbackState } from './feedbacks.reducers';
import {
  catchError,
  distinctUntilChanged,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { FeedBacksApi } from '../../apis';
import { of } from 'rxjs';

@Injectable()
export class FeedbacksEffects {
  constructor(
    private actions$: Actions,
    private feedbackService: FeedBacksApi,
    private store: Store<{
      singleUser: CurrentUserState;
      feedbacks: FeedbackState;
    }>
  ) {}

  loadFeedbacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedbacksActions.loadUserFeedbacks),
      mergeMap(action => {
        return this.feedbackService
          .readFeedbacksApiFeedbacksHandlerHandlerIdGet({
            handlerId: action.handlerId,
          })
          .pipe(
            map(feedbacks =>
              FeedbacksActions.loadUserFeedbacksSuccess({ feedbacks })
            ),
            catchError(error =>
              of(FeedbacksActions.loadFeedbacksFailure({ error }))
            )
          );
      })
    )
  );
  setUserFeedbacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserSuccess),
      withLatestFrom(
        this.store.pipe(
          select(state => state.singleUser),
          distinctUntilChanged(
            (prev, curr) =>
              prev?.name === curr?.name && prev?.email === curr?.email
          )
        )
      ),
      map(([_, user]) => {
        return FeedbacksActions.loadUserFeedbacks({
          handlerId: user.id,
        });
      })
    )
  );
}
