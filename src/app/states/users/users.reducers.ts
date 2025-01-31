import { createReducer, on } from '@ngrx/store';
import { UserResponse } from 'src/services';
import * as UserActions from './users.actions';

export interface UserState {
  users: UserResponse[];
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),
  on(UserActions.addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(UserActions.updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map(u => (u.id === user.id ? user : u)),
  })),
  on(UserActions.deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id),
  }))
);
