import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import * as HeadersActions from './headers.actions';
import { select, Store } from '@ngrx/store';
import { UserState } from '../users/users.reducers';
import { HeaderState } from './headers.reducers';
import { map, withLatestFrom } from 'rxjs';

@Injectable()
export class HeadersEffects {
  constructor(
    private actions$: Actions,
    private store: Store<{ users: UserState; headers: HeaderState }>
  ) {}

  // Effet pour charger tous les utilisateurs
  setTitle$ = createEffect(() =>
    this.actions$.pipe(
      // TODO use a "currentUser" property.
      withLatestFrom(this.store.pipe(select(state => state.users.users[0]))),
      map(([_, user]) => {
        const title = user.name;
        const subTitle = user.email;
        return HeadersActions.setHeaderTitle({
          title: title,
          subTitle: subTitle,
        });
      })
    )
  );
}
