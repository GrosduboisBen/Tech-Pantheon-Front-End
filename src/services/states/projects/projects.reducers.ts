import { createReducer, on } from '@ngrx/store';
import { ProjectListResponse } from '../../models';
import * as ProjectActions from './projects.actions';
//TODO Maybe define supertype or use directly api Model
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ProjectState extends ProjectListResponse {}

export const initialState: ProjectState = {
  projects: [],
  page: 1,
  page_size: 1,
  total: 0,
};

export const projectReducer = createReducer(
  initialState,
  on(ProjectActions.loadProjectSuccess, (state, { projects }) => {
    return {
      ...state,
      projects: projects.projects,
      total: projects.total,
      page: projects.page,
      pageSize: projects.page_size,
    };
  })
);
