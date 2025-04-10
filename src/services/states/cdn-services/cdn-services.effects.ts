import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CdnServicesActions from './cdn-services.actions';
import { DefaultApi } from '../../cdn-services/apis/DefaultApi';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CdnAuthEffects {
  constructor(
    private actions$: Actions,
    private defaultApi: DefaultApi
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.login),
      mergeMap(({ userId, password }) =>
        this.defaultApi
          .loginPost({ loginRequest: { userId, password } }) // Wrap userId and password in loginRequest
          .pipe(
            map(response =>
              CdnServicesActions.loginSuccess({ token: response.token })
            ),
            catchError(error =>
              of(CdnServicesActions.loginFailure({ error: error.message }))
            )
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.register),
      mergeMap(({ userId, password }) =>
        this.defaultApi
          .registerPost({ registerRequest: { userId, password } }) // Wrap userId and password in registerRequest
          .pipe(
            map(() => CdnServicesActions.registerSuccess()),
            catchError(error =>
              of(CdnServicesActions.registerFailure({ error: error.message }))
            )
          )
      )
    )
  );
}

@Injectable()
export class CdnFilesEffects {
  constructor(
    private actions$: Actions,
    private defaultApi: DefaultApi
  ) {}

  loadFiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.loadFiles),
      mergeMap(({ userId, folderPath }) =>
        this.defaultApi
          .listIdWildcardPathGet({ id: userId, wildcardPath: folderPath })
          .pipe(
            map(files => CdnServicesActions.loadFilesSuccess({ files })),
            catchError(error =>
              of(
                CdnServicesActions.loadFilesFailure({
                  error: 'Failed to load files',
                })
              )
            )
          )
      )
    )
  );

  uploadFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.uploadFile),
      mergeMap(({ userId, folderPath, file }) =>
        this.defaultApi
          .addIdWildcardPathPost({ id: userId, wildcardPath: folderPath, file })
          .pipe(
            map(file => CdnServicesActions.uploadFileSuccess({ file })),
            catchError(error =>
              of(
                CdnServicesActions.uploadFileFailure({
                  error: 'Failed to upload file',
                })
              )
            )
          )
      )
    )
  );

  createFolder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.createFolder),
      mergeMap(({ userId, folderName }) =>
        this.defaultApi
          .createSubfolderIdWildcardPathPost({
            id: userId,
            wildcardPath: folderName,
            createSubfolderRequest: { subFolderName: folderName }, // Wrap subFolderName in createSubfolderRequest
          })
          .pipe(
            map(() =>
              CdnServicesActions.createFolderSuccess({ folder: folderName })
            ),
            catchError(error =>
              of(
                CdnServicesActions.createFolderFailure({
                  error: 'Failed to create folder',
                })
              )
            )
          )
      )
    )
  );

  deleteFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.deleteFile),
      mergeMap(({ userId, fileName }) =>
        this.defaultApi
          .deleteFileIdWildcardPathDelete({
            id: userId,
            wildcardPath: fileName,
          })
          .pipe(
            map(() => CdnServicesActions.deleteFileSuccess({ fileName })),
            catchError(error =>
              of(
                CdnServicesActions.deleteFileFailure({
                  error: 'Failed to delete file',
                })
              )
            )
          )
      )
    )
  );

  deleteFolder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.deleteFolder),
      mergeMap(({ userId, folderName }) =>
        this.defaultApi
          .deleteFolderIdWildcardPathDelete({
            id: userId,
            wildcardPath: folderName,
          })
          .pipe(
            map(() => CdnServicesActions.deleteFolderSuccess({ folderName })),
            catchError(error =>
              of(
                CdnServicesActions.deleteFolderFailure({
                  error: 'Failed to delete folder',
                })
              )
            )
          )
      )
    )
  );

  downloadFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CdnServicesActions.downloadFile),
      mergeMap(({ userId, fileName }) =>
        this.defaultApi
          .downloadIdWildcardPathGet({ id: userId, wildcardPath: fileName })
          .pipe(
            map(file => CdnServicesActions.downloadFileSuccess({ file })),
            catchError(error =>
              of(
                CdnServicesActions.downloadFileFailure({
                  error: 'Failed to download file',
                })
              )
            )
          )
      )
    )
  );
}
