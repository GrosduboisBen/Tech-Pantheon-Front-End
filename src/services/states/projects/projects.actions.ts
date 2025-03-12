import { createAction, props } from '@ngrx/store';
import { ProjectListResponse } from '../../models';

export const loadUserProjects = createAction(
  `[Projects] API Load User Projects`,
  props<{ handlerId: string }>()
);
export const loadProjectSuccess = createAction(
  `[Projects] API Load User Projects`,
  props<{ projects: ProjectListResponse }>()
);
export const loadProjectsFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: any }>()
);
