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
    ProjectStatusEnum,
} from './';

/**
 * @export
 * @interface ProjectResponse
 */
export interface ProjectResponse {
    /**
     * @type {string}
     * @memberof ProjectResponse
     */
    title: string;
    /**
     * @type {string}
     * @memberof ProjectResponse
     */
    description: string;
    /**
     * @type {ProjectStatusEnum}
     * @memberof ProjectResponse
     */
    status: ProjectStatusEnum;
    /**
     * @type {string}
     * @memberof ProjectResponse
     */
    start_date: string | null;
    /**
     * @type {string}
     * @memberof ProjectResponse
     */
    end_date: string | null;
    /**
     * @type {number}
     * @memberof ProjectResponse
     */
    total_price: number | null;
    /**
     * @type {number}
     * @memberof ProjectResponse
     */
    tax_rate: number | null;
    /**
     * @type {string}
     * @memberof ProjectResponse
     */
    id: string;
    /**
     * @type {string}
     * @memberof ProjectResponse
     */
    creation_date: string;
    /**
     * @type {string}
     * @memberof ProjectResponse
     */
    client_id: string;
}


