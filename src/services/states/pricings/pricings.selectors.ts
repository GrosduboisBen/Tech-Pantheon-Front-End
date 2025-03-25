import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PricingState } from './pricings.reducers';

export const selectPricingState =
  createFeatureSelector<PricingState>('pricings');

export const selectPricing = createSelector(
  selectPricingState,
  (state: PricingState) => {
    return state;
  }
);
