import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersApi } from 'src/services';
import * as UserActions from './users.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersApi
  ) {}

  //   loadUsers$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(UserActions.loadUsers),
  //       mergeMap(() =>
  //         this.userService.getUsers().pipe(
  //           map(users => UserActions.loadUsersSuccess({ users })),
  //           catchError(error => of(UserActions.loadUsersFailure({ error })))
  //         )
  //       )
  //     )
  //   );
}
