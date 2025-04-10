import { createAction, props } from '@ngrx/store';

export const loadFiles = createAction(
  '[CDN Services] Load Files',
  props<{ userId: string; folderPath: string }>()
);

export const loadFilesSuccess = createAction(
  '[CDN Services] Load Files Success',
  props<{ files: any }>() // Adjust type to match API response
);

export const loadFilesFailure = createAction(
  '[CDN Services] Load Files Failure',
  props<{ error: string }>()
);

export const uploadFile = createAction(
  '[CDN Services] Upload File',
  props<{ userId: string; folderPath: string; file: File }>()
);

export const uploadFileSuccess = createAction(
  '[CDN Services] Upload File Success',
  props<{ file: any }>()
);

export const uploadFileFailure = createAction(
  '[CDN Services] Upload File Failure',
  props<{ error: string }>()
);

export const createFolder = createAction(
  '[CDN Services] Create Folder',
  props<{ userId: string; folderName: string }>()
);

export const createFolderSuccess = createAction(
  '[CDN Services] Create Folder Success',
  props<{ folder: any }>()
);

export const createFolderFailure = createAction(
  '[CDN Services] Create Folder Failure',
  props<{ error: string }>()
);

export const deleteFile = createAction(
  '[CDN Services] Delete File',
  props<{ userId: string; fileName: string }>()
);

export const deleteFileSuccess = createAction(
  '[CDN Services] Delete File Success',
  props<{ fileName: string }>()
);

export const deleteFileFailure = createAction(
  '[CDN Services] Delete File Failure',
  props<{ error: string }>()
);

export const deleteFolder = createAction(
  '[CDN Services] Delete Folder',
  props<{ userId: string; folderName: string }>()
);

export const deleteFolderSuccess = createAction(
  '[CDN Services] Delete Folder Success',
  props<{ folderName: string }>()
);

export const deleteFolderFailure = createAction(
  '[CDN Services] Delete Folder Failure',
  props<{ error: string }>()
);

export const downloadFile = createAction(
  '[CDN Services] Download File',
  props<{ userId: string; fileName: string }>()
);

export const downloadFileSuccess = createAction(
  '[CDN Services] Download File Success',
  props<{ file: Blob }>()
);

export const downloadFileFailure = createAction(
  '[CDN Services] Download File Failure',
  props<{ error: string }>()
);

// Authentication Actions
export const login = createAction(
  '[CDN Auth] Login',
  props<{ userId: string; password: string }>()
);

export const loginSuccess = createAction(
  '[CDN Auth] Login Success',
  props<{ token: string | undefined }>() // Allow undefined for token
);

export const loginFailure = createAction(
  '[CDN Auth] Login Failure',
  props<{ error: string }>()
);

export const register = createAction(
  '[CDN Auth] Register',
  props<{ userId: string; password: string }>()
);

export const registerSuccess = createAction('[CDN Auth] Register Success');

export const registerFailure = createAction(
  '[CDN Auth] Register Failure',
  props<{ error: string }>()
);
