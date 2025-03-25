import { createAction, props } from '@ngrx/store';
import { UserPricing } from '../../models';
export const loadUserPricings = createAction(
  '[Pricings] Get User Pricings',
  props<{ userId: string }>()
);

export const loadUserPricingsSuccess = createAction(
  '[Pricings] Get User Pricings Success',
  props<{ pricings: UserPricing[] }>()
);

export const loadPricingsFailure = createAction(
  '[Pricings] Pricings load failure',
  props<{ error: any }>()
);
