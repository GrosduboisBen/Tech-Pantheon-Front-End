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
    MilestoneCreate,
    MilestoneListResponse,
    MilestoneResponse,
    MilestoneUpdate,
} from '../models';

export interface CreateApiMilestonesPostRequest {
    milestoneCreate: MilestoneCreate;
}

export interface DeleteApiMilestonesMilestoneIdDeleteRequest {
    milestoneId: string;
}

export interface ReadMilestoneApiMilestonesMilestoneIdGetRequest {
    milestoneId: string;
}

export interface ReadMilestonesApiMilestonesGetRequest {
    page?: number;
    pageSize?: number;
}

export interface UpdateApiMilestonesMilestoneIdPutRequest {
    milestoneId: string;
    milestoneUpdate: MilestoneUpdate;
}

/**
 * no description
 */
export class MilestonesApi extends BaseAPI {

    /**
     * Create a new milestone.
     * Create
     */
    createApiMilestonesPost({ milestoneCreate }: CreateApiMilestonesPostRequest): Observable<MilestoneResponse>
    createApiMilestonesPost({ milestoneCreate }: CreateApiMilestonesPostRequest, opts?: OperationOpts): Observable<AjaxResponse<MilestoneResponse>>
    createApiMilestonesPost({ milestoneCreate }: CreateApiMilestonesPostRequest, opts?: OperationOpts): Observable<MilestoneResponse | AjaxResponse<MilestoneResponse>> {
        throwIfNullOrUndefined(milestoneCreate, 'milestoneCreate', 'createApiMilestonesPost');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<MilestoneResponse>({
            url: '/api/milestones/',
            method: 'POST',
            headers,
            body: milestoneCreate,
        }, opts?.responseOpts);
    };

    /**
     * Delete a milestone by ID.
     * Delete
     */
    deleteApiMilestonesMilestoneIdDelete({ milestoneId }: DeleteApiMilestonesMilestoneIdDeleteRequest): Observable<any>
    deleteApiMilestonesMilestoneIdDelete({ milestoneId }: DeleteApiMilestonesMilestoneIdDeleteRequest, opts?: OperationOpts): Observable<AjaxResponse<any>>
    deleteApiMilestonesMilestoneIdDelete({ milestoneId }: DeleteApiMilestonesMilestoneIdDeleteRequest, opts?: OperationOpts): Observable<any | AjaxResponse<any>> {
        throwIfNullOrUndefined(milestoneId, 'milestoneId', 'deleteApiMilestonesMilestoneIdDelete');

        return this.request<any>({
            url: '/api/milestones/{milestone_id}'.replace('{milestone_id}', encodeURI(milestoneId)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Retrieve a milestone by ID.
     * Read Milestone
     */
    readMilestoneApiMilestonesMilestoneIdGet({ milestoneId }: ReadMilestoneApiMilestonesMilestoneIdGetRequest): Observable<MilestoneResponse>
    readMilestoneApiMilestonesMilestoneIdGet({ milestoneId }: ReadMilestoneApiMilestonesMilestoneIdGetRequest, opts?: OperationOpts): Observable<AjaxResponse<MilestoneResponse>>
    readMilestoneApiMilestonesMilestoneIdGet({ milestoneId }: ReadMilestoneApiMilestonesMilestoneIdGetRequest, opts?: OperationOpts): Observable<MilestoneResponse | AjaxResponse<MilestoneResponse>> {
        throwIfNullOrUndefined(milestoneId, 'milestoneId', 'readMilestoneApiMilestonesMilestoneIdGet');

        return this.request<MilestoneResponse>({
            url: '/api/milestones/{milestone_id}'.replace('{milestone_id}', encodeURI(milestoneId)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Retrieve a list of milestones with pagination.
     * Read Milestones
     */
    readMilestonesApiMilestonesGet({ page, pageSize }: ReadMilestonesApiMilestonesGetRequest): Observable<MilestoneListResponse>
    readMilestonesApiMilestonesGet({ page, pageSize }: ReadMilestonesApiMilestonesGetRequest, opts?: OperationOpts): Observable<AjaxResponse<MilestoneListResponse>>
    readMilestonesApiMilestonesGet({ page, pageSize }: ReadMilestonesApiMilestonesGetRequest, opts?: OperationOpts): Observable<MilestoneListResponse | AjaxResponse<MilestoneListResponse>> {

        const query: HttpQuery = {};

        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }

        return this.request<MilestoneListResponse>({
            url: '/api/milestones/',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Update a milestone by ID.
     * Update
     */
    updateApiMilestonesMilestoneIdPut({ milestoneId, milestoneUpdate }: UpdateApiMilestonesMilestoneIdPutRequest): Observable<MilestoneResponse>
    updateApiMilestonesMilestoneIdPut({ milestoneId, milestoneUpdate }: UpdateApiMilestonesMilestoneIdPutRequest, opts?: OperationOpts): Observable<AjaxResponse<MilestoneResponse>>
    updateApiMilestonesMilestoneIdPut({ milestoneId, milestoneUpdate }: UpdateApiMilestonesMilestoneIdPutRequest, opts?: OperationOpts): Observable<MilestoneResponse | AjaxResponse<MilestoneResponse>> {
        throwIfNullOrUndefined(milestoneId, 'milestoneId', 'updateApiMilestonesMilestoneIdPut');
        throwIfNullOrUndefined(milestoneUpdate, 'milestoneUpdate', 'updateApiMilestonesMilestoneIdPut');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<MilestoneResponse>({
            url: '/api/milestones/{milestone_id}'.replace('{milestone_id}', encodeURI(milestoneId)),
            method: 'PUT',
            headers,
            body: milestoneUpdate,
        }, opts?.responseOpts);
    };

}
