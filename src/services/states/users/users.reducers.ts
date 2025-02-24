import { createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';
import * as HeadersActions from '../headers/headers.actions';
import { UserResponse } from '../../models';

export interface UserState {
  users: UserResponse[]; // Tableau des utilisateurs
  total: number; // Total des utilisateurs
  page: number; // Page actuelle
  pageSize: number; // Taille de la page
  error: string | null;
  loading: boolean;
}

export const initialState: UserState = {
  users: [],
  total: 0, // Initialisation à zéro
  page: 1, // Par défaut, commencer à la première page
  pageSize: 10, // Valeur par défaut, ajustable selon les besoins
  error: null,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({
    ...state,
    loading: true, // Mise à jour du chargement à true lors du début de l'appel
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users.users, // On garde le tableau d'utilisateurs
    total: users.total, // On garde le total des utilisateurs
    page: users.page, // On garde la page actuelle
    pageSize: users.page_size, // On garde la taille de la page
    loading: false, // On indique que la récupération est terminée
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false, // Mise à jour du chargement à false en cas d'échec
  })),
  on(UserActions.createUser, state => ({
    ...state,
    loading: true, // Mise à jour du chargement à true lors de la création
  })),
  on(UserActions.createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false, // Mise à jour du chargement à false après la réussite
  })),
  on(UserActions.createUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false, // Mise à jour du chargement à false en cas d'échec
  })),
  on(UserActions.updateUser, state => ({
    ...state,
    loading: true, // Mise à jour du chargement à true lors de la mise à jour
  })),
  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => (u.id === user.id ? user : u)),
    loading: false, // Mise à jour du chargement à false après la réussite
  })),
  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false, // Mise à jour du chargement à false en cas d'échec
  })),
  on(UserActions.deleteUser, state => ({
    ...state,
    loading: true, // Mise à jour du chargement à true lors de la suppression
  })),
  on(UserActions.deleteUserSuccess, (state, { userId }) => ({
    ...state,
    users: state.users.filter(user => user.id !== userId),
    loading: false, // Mise à jour du chargement à false après la réussite
  })),
  on(UserActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false, // Mise à jour du chargement à false en cas d'échec
  }))
);
