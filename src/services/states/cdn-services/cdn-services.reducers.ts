import { createReducer, on } from '@ngrx/store';
import * as CdnServicesActions from './cdn-services.actions';

// Authentication State
export interface CdnAuthState {
  token: string | null;
  loginError: string | null;
  registerError: string | null;
}

export const initialAuthState: CdnAuthState = {
  token: null,
  loginError: null,
  registerError: null,
};

export const cdnAuthReducer = createReducer(
  initialAuthState,
  on(CdnServicesActions.login, state => ({ ...state, loginError: null })),
  on(CdnServicesActions.loginSuccess, (state, { token }) => ({
    ...state,
    token: token || null, // Handle undefined token
  })),
  on(CdnServicesActions.loginFailure, (state, { error }) => ({
    ...state,
    loginError: error,
  })),
  on(CdnServicesActions.register, state => ({ ...state, registerError: null })),
  on(CdnServicesActions.registerSuccess, state => state),
  on(CdnServicesActions.registerFailure, (state, { error }) => ({
    ...state,
    registerError: error,
  }))
);

// File Management State
export interface CdnFilesState {
  files: any[];
  loading: boolean;
  error: string | null;
}

export const initialFilesState: CdnFilesState = {
  files: [],
  loading: false,
  error: null,
};

export const cdnFilesReducer = createReducer(
  initialFilesState,
  on(CdnServicesActions.loadFiles, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CdnServicesActions.loadFilesSuccess, (state, { files }) => ({
    ...state,
    files: Array.isArray(files) ? files : [], // Ensure files is an array
    loading: false,
  })),
  on(CdnServicesActions.loadFilesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CdnServicesActions.uploadFile, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CdnServicesActions.uploadFileSuccess, (state, { file }) => ({
    ...state,
    files: [...state.files, file],
    loading: false,
  })),
  on(CdnServicesActions.uploadFileFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CdnServicesActions.createFolder, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CdnServicesActions.createFolderSuccess, (state, { folder }) => ({
    ...state,
    files: [...state.files, folder],
    loading: false,
  })),
  on(CdnServicesActions.createFolderFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CdnServicesActions.deleteFile, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CdnServicesActions.deleteFileSuccess, (state, { fileName }) => ({
    ...state,
    files: state.files.filter(file => file.name !== fileName),
    loading: false,
  })),
  on(CdnServicesActions.deleteFileFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CdnServicesActions.deleteFolder, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CdnServicesActions.deleteFolderSuccess, (state, { folderName }) => ({
    ...state,
    files: state.files.filter(folder => folder.name !== folderName),
    loading: false,
  })),
  on(CdnServicesActions.deleteFolderFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CdnServicesActions.downloadFile, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CdnServicesActions.downloadFileSuccess, state => ({
    ...state,
    loading: false,
  })),
  on(CdnServicesActions.downloadFileFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
