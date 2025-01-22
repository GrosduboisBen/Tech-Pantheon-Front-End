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
import type { PricingResponse } from './PricingResponse';
import {
    PricingResponseFromJSON,
    PricingResponseFromJSONTyped,
    PricingResponseToJSON,
} from './PricingResponse';

/**
 * 
 * @export
 * @interface PricingListResponse
 */
export interface PricingListResponse {
    /**
     * 
     * @type {number}
     * @memberof PricingListResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof PricingListResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof PricingListResponse
     */
    pageSize: number;
    /**
     * 
     * @type {Array<PricingResponse>}
     * @memberof PricingListResponse
     */
    pricing: Array<PricingResponse>;
}

/**
 * Check if a given object implements the PricingListResponse interface.
 */
export function instanceOfPricingListResponse(value: object): value is PricingListResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('pricing' in value) || value['pricing'] === undefined) return false;
    return true;
}

export function PricingListResponseFromJSON(json: any): PricingListResponse {
    return PricingListResponseFromJSONTyped(json, false);
}

export function PricingListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'pageSize': json['page_size'],
        'pricing': ((json['pricing'] as Array<any>).map(PricingResponseFromJSON)),
    };
}

export function PricingListResponseToJSON(value?: PricingListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'pricing': ((value['pricing'] as Array<any>).map(PricingResponseToJSON)),
    };
}

