import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ProjectActions from './projects.actions';
import * as UserActions from '../users/users.actions';
import {
  catchError,
  distinctUntilChanged,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectsApi } from '../../apis';
import { select, Store } from '@ngrx/store';
import { CurrentUserState, UserState } from '../users/users.reducers';
import { ProjectState } from './projects.reducers';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectsApi,
    private store: Store<{
      singleUser: CurrentUserState;
      projects: ProjectState;
    }>
  ) {}
  loadProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.loadUserProjects),
      mergeMap(action => {
        console.log(action);
        return this.projectService
          .readProjectApiProjectsHandlerHandlerIdGet({
            handlerId: action.id,
          })
          .pipe(
            map(projects => ProjectActions.loadProjectSuccess({ projects })),
            catchError(error =>
              of(ProjectActions.loadProjectsFailure({ error }))
            )
          );
      })
    )
  );
  setUserProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserSuccess),
      withLatestFrom(
        this.store.pipe(
          select(state => state.singleUser),
          distinctUntilChanged(
            (prev, curr) =>
              prev?.name === curr?.name && prev?.email === curr?.email
          )
        )
      ),
      map(([_, user]) => {
        return ProjectActions.loadUserProjects({
          id: user.id,
        });
      })
    )
  );
}
