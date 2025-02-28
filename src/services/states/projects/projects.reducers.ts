import { ProjectResponse } from '../../models';

//TODO Maybe define supertype or use directly api Model
export interface ProjectState extends ProjectResponse {}

export const initialState: ProjectState = {
  client_id: '',
  creation_date: new Date().toISOString(),
  
};
