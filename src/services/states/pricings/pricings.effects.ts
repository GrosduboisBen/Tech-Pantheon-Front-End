import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PricingsActions from './pricings.actions';
import * as UserActions from '../users/users.actions';
import { select, Store } from '@ngrx/store';
import { CurrentUserState } from '../users/users.reducers';
import { PricingState } from './pricings.reducers';
import {
  catchError,
  distinctUntilChanged,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { PricingApi } from '../../apis';
import { of } from 'rxjs';

@Injectable()
export class PricingEffects {
  constructor(
    private actions$: Actions,
    private pricingService: PricingApi,
    private store: Store<{
      singleUser: CurrentUserState;
      pricings: PricingState;
    }>
  ) {}

  loadFeedbacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PricingsActions.loadUserPricings),
      mergeMap(action => {
        return this.pricingService
          .readUserPricingApiPricingUserUserIdGet({
            userId: action.userId,
          })
          .pipe(
            map(pricings =>
              PricingsActions.loadUserPricingsSuccess({ pricings })
            ),
            catchError(error =>
              of(PricingsActions.loadPricingsFailure({ error }))
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
        return PricingsActions.loadUserPricings({
          userId: user.id,
        });
      })
    )
  );
}
