import { createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';
import * as HeadersActions from '../headers/headers.actions';
import { UserResponse } from '../../models';

export interface UserState {
  users: UserResponse[];
  total: number;
  page: number;
  pageSize: number;
  error: string | null;
  loading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CurrentUserState extends UserResponse {}

export const initialState: UserState = {
  users: [],
  total: 0,
  page: 1,
  pageSize: 10,
  error: null,
  loading: false,
};

export const selectedUserState: CurrentUserState = {
  active: false,
  creation_date: '',
  description: '',
  email: '',
  id: '',
  last_login_date: '',
  main_job: '',
  name: '',
  role_id: '',
};

export const singleUserReducer = createReducer(
  selectedUserState,
  on(UserActions.loadUserById, state => ({
    ...state,
    loading: true,
  })),
  on(UserActions.loadUserSuccess, (state, { user }) => {
    return {
      ...state,
      active: user.active,
      creation_date: user.creation_date,
      description: user.description,
      email: user.email,
      id: user.id,
      last_login_date: user.last_login_date,
      main_job: user.main_job,
      name: user.name,
      role_id: '',
    };
  }),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export const userListReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({
    ...state,
    loading: true,
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users.users,
    total: users.total,
    page: users.page,
    pageSize: users.page_size,
    loading: false,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UserActions.createUser, state => ({
    ...state,
    loading: true,
  })),
  on(UserActions.createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  on(UserActions.createUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UserActions.updateUser, state => ({
    ...state,
    loading: true,
  })),
  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => (u.id === user.id ? user : u)),
    loading: false,
  })),
  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UserActions.deleteUser, state => ({
    ...state,
    loading: true,
  })),
  on(UserActions.deleteUserSuccess, (state, { userId }) => ({
    ...state,
    users: state.users.filter(user => user.id !== userId),
    loading: false,
  })),
  on(UserActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
