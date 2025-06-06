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
    RoleCreate,
    RoleListResponse,
    RoleResponse,
    RoleUpdate,
} from '../models';

export interface CreateApiRolesPostRequest {
    roleCreate: RoleCreate;
}

export interface DeleteApiRolesRoleIdDeleteRequest {
    roleId: string;
}

export interface ReadRoleApiRolesRoleIdGetRequest {
    roleId: string;
}

export interface ReadRolesApiRolesGetRequest {
    page?: number;
    pageSize?: number;
}

export interface UpdateApiRolesRoleIdPutRequest {
    roleId: string;
    roleUpdate: RoleUpdate;
}

/**
 * no description
 */
export class RolesApi extends BaseAPI {

    /**
     * Create a new role.
     * Create
     */
    createApiRolesPost({ roleCreate }: CreateApiRolesPostRequest): Observable<RoleResponse>
    createApiRolesPost({ roleCreate }: CreateApiRolesPostRequest, opts?: OperationOpts): Observable<AjaxResponse<RoleResponse>>
    createApiRolesPost({ roleCreate }: CreateApiRolesPostRequest, opts?: OperationOpts): Observable<RoleResponse | AjaxResponse<RoleResponse>> {
        throwIfNullOrUndefined(roleCreate, 'roleCreate', 'createApiRolesPost');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RoleResponse>({
            url: '/api/roles/',
            method: 'POST',
            headers,
            body: roleCreate,
        }, opts?.responseOpts);
    };

    /**
     * Delete a role by ID.
     * Delete
     */
    deleteApiRolesRoleIdDelete({ roleId }: DeleteApiRolesRoleIdDeleteRequest): Observable<any>
    deleteApiRolesRoleIdDelete({ roleId }: DeleteApiRolesRoleIdDeleteRequest, opts?: OperationOpts): Observable<AjaxResponse<any>>
    deleteApiRolesRoleIdDelete({ roleId }: DeleteApiRolesRoleIdDeleteRequest, opts?: OperationOpts): Observable<any | AjaxResponse<any>> {
        throwIfNullOrUndefined(roleId, 'roleId', 'deleteApiRolesRoleIdDelete');

        return this.request<any>({
            url: '/api/roles/{role_id}'.replace('{role_id}', encodeURI(roleId)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Retrieve a role by ID.
     * Read Role
     */
    readRoleApiRolesRoleIdGet({ roleId }: ReadRoleApiRolesRoleIdGetRequest): Observable<RoleResponse>
    readRoleApiRolesRoleIdGet({ roleId }: ReadRoleApiRolesRoleIdGetRequest, opts?: OperationOpts): Observable<AjaxResponse<RoleResponse>>
    readRoleApiRolesRoleIdGet({ roleId }: ReadRoleApiRolesRoleIdGetRequest, opts?: OperationOpts): Observable<RoleResponse | AjaxResponse<RoleResponse>> {
        throwIfNullOrUndefined(roleId, 'roleId', 'readRoleApiRolesRoleIdGet');

        return this.request<RoleResponse>({
            url: '/api/roles/{role_id}'.replace('{role_id}', encodeURI(roleId)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Retrieve a list of roles with pagination.
     * Read Roles
     */
    readRolesApiRolesGet({ page, pageSize }: ReadRolesApiRolesGetRequest): Observable<RoleListResponse>
    readRolesApiRolesGet({ page, pageSize }: ReadRolesApiRolesGetRequest, opts?: OperationOpts): Observable<AjaxResponse<RoleListResponse>>
    readRolesApiRolesGet({ page, pageSize }: ReadRolesApiRolesGetRequest, opts?: OperationOpts): Observable<RoleListResponse | AjaxResponse<RoleListResponse>> {

        const query: HttpQuery = {};

        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }

        return this.request<RoleListResponse>({
            url: '/api/roles/',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Update a role by ID.
     * Update
     */
    updateApiRolesRoleIdPut({ roleId, roleUpdate }: UpdateApiRolesRoleIdPutRequest): Observable<RoleResponse>
    updateApiRolesRoleIdPut({ roleId, roleUpdate }: UpdateApiRolesRoleIdPutRequest, opts?: OperationOpts): Observable<AjaxResponse<RoleResponse>>
    updateApiRolesRoleIdPut({ roleId, roleUpdate }: UpdateApiRolesRoleIdPutRequest, opts?: OperationOpts): Observable<RoleResponse | AjaxResponse<RoleResponse>> {
        throwIfNullOrUndefined(roleId, 'roleId', 'updateApiRolesRoleIdPut');
        throwIfNullOrUndefined(roleUpdate, 'roleUpdate', 'updateApiRolesRoleIdPut');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RoleResponse>({
            url: '/api/roles/{role_id}'.replace('{role_id}', encodeURI(roleId)),
            method: 'PUT',
            headers,
            body: roleUpdate,
        }, opts?.responseOpts);
    };

}
