import { createReducer, on } from '@ngrx/store';
import * as HeadersActions from './headers.actions';

export interface HeaderState {
  mainTitle: string;
  mainSubtitle: string;
  title: string;
  loading: boolean;
  subTitle: string;
}

export const initialState: HeaderState = {
  mainTitle: '',
  mainSubtitle: '',
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
  })),
  on(HeadersActions.setMainTitle, (state, { mainTitle, mainSubtitle }) => ({
    ...state,
    mainTitle,
    mainSubtitle,
  }))
);
