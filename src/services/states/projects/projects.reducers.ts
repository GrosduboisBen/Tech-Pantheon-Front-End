import { createReducer, on } from '@ngrx/store';
import {
  ProjectListResponse,
  ProjectResponse,
  ProjectStatusEnum,
} from '../../models';
import * as ProjectActions from './projects.actions';
//TODO Maybe define supertype or use directly api Model
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ProjectState extends ProjectListResponse {}

export const initialState: ProjectState = {
  projects: [],
  // client_id: '',
  // handler_id: '',
  // creation_date: new Date().toISOString(),
  // title: '',
  // description: '',
  // end_date: null,
  // id: '',
  // start_date: null,
  // status: ProjectStatusEnum.Canceled,
  // tax_rate: null,
  // total_price: null,
};

export const projectReducer = createReducer(
  initialState,
  on(ProjectActions.loadUserProjects, state => ({
    ...state,
    loading: false,
  })),
  on(ProjectActions.loadProjectSuccess, (state, { projects }) => ({
    ...state,
    projects: projects.projects,
    // total: users.total,
    // page: users.page,
    // pageSize: users.page_size,
    loading: false,
  }))
);
