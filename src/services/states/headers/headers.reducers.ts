import { createReducer, on } from '@ngrx/store';
import * as HeadersActions from './headers.actions';

export interface HeaderState {
  title: string;
  loading: boolean;
  subTitle: string;
}

export const initialState: HeaderState = {
  title: '',
  subTitle: '',
  loading: false,
};

export const headerReducer = createReducer(
  initialState,
  on(HeadersActions.setHeaderTitle, (state, { title, subTitle }) => ({
    ...state,
    title,
    subTitle,
  }))
  // on(HeadersActions.getHeaderTitle, () => initialState)
);
