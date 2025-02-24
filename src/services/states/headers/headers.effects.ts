import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HeadersActions from './headers.actions';
import * as UserActions from '../users/users.actions';
import { select, Store } from '@ngrx/store';
import { UserState } from '../users/users.reducers';
import { HeaderState } from './headers.reducers';
import { distinctUntilChanged, map, withLatestFrom } from 'rxjs';

@Injectable()
export class HeadersEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{ users: UserState; headers: HeaderState }>
  ) {}

  // Effet pour charger tous les utilisateurs
  setTitle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsersSuccess),
      withLatestFrom(
        this.store.pipe(
          select(state => state.users.users[0]),
          distinctUntilChanged(
            (prev, curr) =>
              prev?.name === curr?.name && prev?.email === curr?.email
          )
        )
      ),
      map(([_, user]) => {
        return HeadersActions.setHeaderTitle({
          title: user.name || '',
          subTitle: user.email || '',
        });
      })
    )
  );
}
