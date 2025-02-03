import { createAction, props } from '@ngrx/store';
import {
  UserCreate,
  UserUpdate,
  UserResponse,
  UserListResponse,
} from 'src/services';

// Action pour charger tous les utilisateurs
export const loadUsers = createAction(
  '[User API] Load Users',
  props<{ page?: number; pageSize?: number }>()
);

export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: UserListResponse }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: any }>()
);

// Action pour créer un utilisateur
export const createUser = createAction(
  '[User API] Create User',
  props<{ userCreate: UserCreate }>()
);

export const createUserSuccess = createAction(
  '[User API] Create User Success',
  props<{ user: UserResponse }>()
);

export const createUserFailure = createAction(
  '[User API] Create User Failure',
  props<{ error: any }>()
);

// Action pour mettre à jour un utilisateur
export const updateUser = createAction(
  '[User API] Update User',
  props<{ userId: string; userUpdate: UserUpdate }>()
);

export const updateUserSuccess = createAction(
  '[User API] Update User Success',
  props<{ user: UserResponse }>()
);

export const updateUserFailure = createAction(
  '[User API] Update User Failure',
  props<{ error: any }>()
);

// Action pour supprimer un utilisateur
export const deleteUser = createAction(
  '[User API] Delete User',
  props<{ userId: string }>()
);

export const deleteUserSuccess = createAction(
  '[User API] Delete User Success',
  props<{ userId: string }>()
);

export const deleteUserFailure = createAction(
  '[User API] Delete User Failure',
  props<{ error: any }>()
);

// Action pour charger un utilisateur spécifique
export const loadUser = createAction(
  '[User API] Load User',
  props<{ userId: string }>()
);

export const loadUserSuccess = createAction(
  '[User API] Load User Success',
  props<{ user: UserResponse }>()
);

export const loadUserFailure = createAction(
  '[User API] Load User Failure',
  props<{ error: any }>()
);
