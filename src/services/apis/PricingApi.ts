// tslint:disable
/**
 * Project Manager ( Portfolio )
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    HTTPValidationError,
    PricingCreate,
    PricingListResponse,
    PricingResponse,
    PricingUpdate,
    UserPricing,
} from '../models';

export interface CreateApiPricingPostRequest {
    pricingCreate: PricingCreate;
}

export interface DeleteApiPricingPricingIdDeleteRequest {
    pricingId: string;
}

export interface ReadPricingApiPricingGetRequest {
    page?: number;
    pageSize?: number;
}

export interface ReadPricingEntryApiPricingPricingIdGetRequest {
    pricingId: string;
}

export interface ReadUserPricingApiPricingUserUserIdGetRequest {
    userId: string;
}

export interface UpdateApiPricingPricingIdPutRequest {
    pricingId: string;
    pricingUpdate: PricingUpdate;
}

/**
 * no description
 */
export class PricingApi extends BaseAPI {

    /**
     * Create a new pricing entry.
     * Create
     */
    createApiPricingPost({ pricingCreate }: CreateApiPricingPostRequest): Observable<PricingResponse>
    createApiPricingPost({ pricingCreate }: CreateApiPricingPostRequest, opts?: OperationOpts): Observable<AjaxResponse<PricingResponse>>
    createApiPricingPost({ pricingCreate }: CreateApiPricingPostRequest, opts?: OperationOpts): Observable<PricingResponse | AjaxResponse<PricingResponse>> {
        throwIfNullOrUndefined(pricingCreate, 'pricingCreate', 'createApiPricingPost');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<PricingResponse>({
            url: '/api/pricing/',
            method: 'POST',
            headers,
            body: pricingCreate,
        }, opts?.responseOpts);
    };

    /**
     * Delete a pricing entry by ID.
     * Delete
     */
    deleteApiPricingPricingIdDelete({ pricingId }: DeleteApiPricingPricingIdDeleteRequest): Observable<any>
    deleteApiPricingPricingIdDelete({ pricingId }: DeleteApiPricingPricingIdDeleteRequest, opts?: OperationOpts): Observable<AjaxResponse<any>>
    deleteApiPricingPricingIdDelete({ pricingId }: DeleteApiPricingPricingIdDeleteRequest, opts?: OperationOpts): Observable<any | AjaxResponse<any>> {
        throwIfNullOrUndefined(pricingId, 'pricingId', 'deleteApiPricingPricingIdDelete');

        return this.request<any>({
            url: '/api/pricing/{pricing_id}'.replace('{pricing_id}', encodeURI(pricingId)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Retrieve a list of pricing entries with pagination.
     * Read Pricing
     */
    readPricingApiPricingGet({ page, pageSize }: ReadPricingApiPricingGetRequest): Observable<PricingListResponse>
    readPricingApiPricingGet({ page, pageSize }: ReadPricingApiPricingGetRequest, opts?: OperationOpts): Observable<AjaxResponse<PricingListResponse>>
    readPricingApiPricingGet({ page, pageSize }: ReadPricingApiPricingGetRequest, opts?: OperationOpts): Observable<PricingListResponse | AjaxResponse<PricingListResponse>> {

        const query: HttpQuery = {};

        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }

        return this.request<PricingListResponse>({
            url: '/api/pricing/',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Retrieve a pricing entry by ID.
     * Read Pricing Entry
     */
    readPricingEntryApiPricingPricingIdGet({ pricingId }: ReadPricingEntryApiPricingPricingIdGetRequest): Observable<PricingResponse>
    readPricingEntryApiPricingPricingIdGet({ pricingId }: ReadPricingEntryApiPricingPricingIdGetRequest, opts?: OperationOpts): Observable<AjaxResponse<PricingResponse>>
    readPricingEntryApiPricingPricingIdGet({ pricingId }: ReadPricingEntryApiPricingPricingIdGetRequest, opts?: OperationOpts): Observable<PricingResponse | AjaxResponse<PricingResponse>> {
        throwIfNullOrUndefined(pricingId, 'pricingId', 'readPricingEntryApiPricingPricingIdGet');

        return this.request<PricingResponse>({
            url: '/api/pricing/{pricing_id}'.replace('{pricing_id}', encodeURI(pricingId)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Retrieve a list of pricing informations by user ID.
     * Read User Pricing
     */
    readUserPricingApiPricingUserUserIdGet({ userId }: ReadUserPricingApiPricingUserUserIdGetRequest): Observable<Array<UserPricing>>
    readUserPricingApiPricingUserUserIdGet({ userId }: ReadUserPricingApiPricingUserUserIdGetRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<UserPricing>>>
    readUserPricingApiPricingUserUserIdGet({ userId }: ReadUserPricingApiPricingUserUserIdGetRequest, opts?: OperationOpts): Observable<Array<UserPricing> | AjaxResponse<Array<UserPricing>>> {
        throwIfNullOrUndefined(userId, 'userId', 'readUserPricingApiPricingUserUserIdGet');

        return this.request<Array<UserPricing>>({
            url: '/api/pricing/user/{user_id}'.replace('{user_id}', encodeURI(userId)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Update a pricing entry by ID.
     * Update
     */
    updateApiPricingPricingIdPut({ pricingId, pricingUpdate }: UpdateApiPricingPricingIdPutRequest): Observable<PricingResponse>
    updateApiPricingPricingIdPut({ pricingId, pricingUpdate }: UpdateApiPricingPricingIdPutRequest, opts?: OperationOpts): Observable<AjaxResponse<PricingResponse>>
    updateApiPricingPricingIdPut({ pricingId, pricingUpdate }: UpdateApiPricingPricingIdPutRequest, opts?: OperationOpts): Observable<PricingResponse | AjaxResponse<PricingResponse>> {
        throwIfNullOrUndefined(pricingId, 'pricingId', 'updateApiPricingPricingIdPut');
        throwIfNullOrUndefined(pricingUpdate, 'pricingUpdate', 'updateApiPricingPricingIdPut');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<PricingResponse>({
            url: '/api/pricing/{pricing_id}'.replace('{pricing_id}', encodeURI(pricingId)),
            method: 'PUT',
            headers,
            body: pricingUpdate,
        }, opts?.responseOpts);
    };

}
