import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UsersApi } from 'src/services';
import * as UserActions from './users.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersApi
  ) {}

  // Effet pour charger tous les utilisateurs
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(action =>
        this.userService
          .readUsersApiUsersGet({
            page: action.page,
            pageSize: action.pageSize,
          })
          .pipe(
            map(users => UserActions.loadUsersSuccess({ users })),
            catchError(error => of(UserActions.loadUsersFailure({ error })))
          )
      )
    )
  );

  // Effet pour charger un utilisateur spécifique
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap(action =>
        this.userService
          .readUserApiUsersUserIdGet({ userId: action.userId })
          .pipe(
            map(user => UserActions.loadUserSuccess({ user })),
            catchError(error => of(UserActions.loadUserFailure({ error })))
          )
      )
    )
  );

  // Effet pour créer un utilisateur
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      mergeMap(action =>
        this.userService
          .createApiUsersPost({ userCreate: action.userCreate })
          .pipe(
            map(user => UserActions.createUserSuccess({ user })),
            catchError(error => of(UserActions.createUserFailure({ error })))
          )
      )
    )
  );

  // Effet pour mettre à jour un utilisateur
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(action =>
        this.userService
          .updateApiUsersUserIdPut({
            userId: action.userId,
            userUpdate: action.userUpdate,
          })
          .pipe(
            map(user => UserActions.updateUserSuccess({ user })),
            catchError(error => of(UserActions.updateUserFailure({ error })))
          )
      )
    )
  );

  // Effet pour supprimer un utilisateur
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap(action =>
        this.userService
          .deleteApiUsersUserIdDelete({ userId: action.userId })
          .pipe(
            map(() => UserActions.deleteUserSuccess({ userId: action.userId })),
            catchError(error => of(UserActions.deleteUserFailure({ error })))
          )
      )
    )
  );
}
