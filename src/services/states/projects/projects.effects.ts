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
import { UserState } from '../users/users.reducers';
import { ProjectState } from './projects.reducers';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectsApi,
    private store: Store<{ users: UserState; projects: ProjectState }>
  ) {}
  loadProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.loadUserProjects),
      mergeMap(action =>
        this.projectService
          .readProjectApiProjectsHandlerHandlerIdGet({
            handlerId: action.handlerId,
          })
          .pipe(
            map(projects => {
              return ProjectActions.loadProjectSuccess({ projects });
            }),
            catchError(error =>
              of(ProjectActions.loadProjectsFailure({ error }))
            )
          )
      )
    )
  );
  setUserProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsersSuccess),
      withLatestFrom(
        this.store.pipe(
          select(state => state.users.users[0]),
          distinctUntilChanged(
            (prev, curr) =>
              prev?.name === curr?.name && prev?.email === curr?.email
          )
        )
      ),
      map(([_, user]) => {
        return ProjectActions.loadUserProjects({
          handlerId: user.id,
        });
      })
    )
  );
}
