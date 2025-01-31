import { createAction, props } from '@ngrx/store';
import { UserListResponse } from 'src/services';
export const loadUsers = createAction(
  '[User API] Load Users',
  props<{ page?: number; pageSize?: number }>() // ✅ Paramètres optionnels
);

export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: UserListResponse }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: any }>()
);
