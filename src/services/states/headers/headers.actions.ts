import { createAction, props } from '@ngrx/store';

// export const getHeaderTitle = createAction(
//   '[Header] Get Header Title',
//   props<{ title: string; subTitle?: string }>()
// );

export const setHeaderTitle = createAction(
  '[Header] Set Header Title',
  props<{ title: string; subTitle?: string }>()
);
