import { createAction, props } from '@ngrx/store';
import { UserResponse } from 'src/services';

export const loadUsers = createAction('[User API] Load Users');
export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: UserResponse[] }>()
);
export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: string }>()
);

export const addUser = createAction(
  '[User Page] Add User',
  props<{ user: UserResponse }>()
);
export const updateUser = createAction(
  '[User Page] Update User',
  props<{ user: UserResponse }>()
);
export const deleteUser = createAction(
  '[User Page] Delete User',
  props<{ id: string }>()
);
