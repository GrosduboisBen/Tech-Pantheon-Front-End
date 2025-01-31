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

import type {
    PermissionResponse,
} from './';

/**
 * @export
 * @interface PermissionListResponse
 */
export interface PermissionListResponse {
    /**
     * @type {number}
     * @memberof PermissionListResponse
     */
    total: number;
    /**
     * @type {number}
     * @memberof PermissionListResponse
     */
    page: number;
    /**
     * @type {number}
     * @memberof PermissionListResponse
     */
    page_size: number;
    /**
     * @type {Array<PermissionResponse>}
     * @memberof PermissionListResponse
     */
    permissions: Array<PermissionResponse>;
}
