/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { RoleResponse } from './RoleResponse';
import {
    RoleResponseFromJSON,
    RoleResponseFromJSONTyped,
    RoleResponseToJSON,
} from './RoleResponse';

/**
 * 
 * @export
 * @interface RoleListResponse
 */
export interface RoleListResponse {
    /**
     * 
     * @type {number}
     * @memberof RoleListResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof RoleListResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof RoleListResponse
     */
    pageSize: number;
    /**
     * 
     * @type {Array<RoleResponse>}
     * @memberof RoleListResponse
     */
    roles: Array<RoleResponse>;
}

/**
 * Check if a given object implements the RoleListResponse interface.
 */
export function instanceOfRoleListResponse(value: object): value is RoleListResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('roles' in value) || value['roles'] === undefined) return false;
    return true;
}

export function RoleListResponseFromJSON(json: any): RoleListResponse {
    return RoleListResponseFromJSONTyped(json, false);
}

export function RoleListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'pageSize': json['page_size'],
        'roles': ((json['roles'] as Array<any>).map(RoleResponseFromJSON)),
    };
}

export function RoleListResponseToJSON(value?: RoleListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'roles': ((value['roles'] as Array<any>).map(RoleResponseToJSON)),
    };
}

