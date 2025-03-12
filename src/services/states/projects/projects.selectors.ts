import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from './projects.reducers';

export const selectProjectState =
  createFeatureSelector<ProjectState>('projects');

export const selectProjects = createSelector(
  selectProjectState,
  (state: ProjectState) => state.projects
);

// export const selectHandlerProjects = (handlerId: string) =>
//     createSelector(selectProjects,state => {

//     })
