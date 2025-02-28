import { createAction, props } from '@ngrx/store';

export const loadUserProjects = createAction(
  `[Projects] API Load User Projects`,
  props<{ userId: string }>()
);
