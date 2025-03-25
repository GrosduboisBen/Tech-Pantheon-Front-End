import { createReducer, on } from '@ngrx/store';
import * as FeedbacksActions from './pricings.actions';
import { UserPricing } from '../../models';
import * as lodash from 'lodash';
export interface PricingState {
  pricings: UserPricing[];
  total: number;
  averagePricing: number;
}

export const initialState: PricingState = {
  pricings: [],
  total: 0,
  averagePricing: 0,
};

export const pricingReducer = createReducer(
  initialState,
  on(FeedbacksActions.loadUserPricingsSuccess, (state, { pricings }) => ({
    ...state,
    pricings: pricings,
    total: pricings.length,
    averagePricing: lodash.mean(
      pricings.map(f => {
        return f.price_per_day;
      })
    ),
  }))
);
