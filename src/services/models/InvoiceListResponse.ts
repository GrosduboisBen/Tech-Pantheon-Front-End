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
import type { InvoiceResponse } from './InvoiceResponse';
import {
    InvoiceResponseFromJSON,
    InvoiceResponseFromJSONTyped,
    InvoiceResponseToJSON,
} from './InvoiceResponse';

/**
 * 
 * @export
 * @interface InvoiceListResponse
 */
export interface InvoiceListResponse {
    /**
     * 
     * @type {number}
     * @memberof InvoiceListResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceListResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceListResponse
     */
    pageSize: number;
    /**
     * 
     * @type {Array<InvoiceResponse>}
     * @memberof InvoiceListResponse
     */
    invoices: Array<InvoiceResponse>;
}

/**
 * Check if a given object implements the InvoiceListResponse interface.
 */
export function instanceOfInvoiceListResponse(value: object): value is InvoiceListResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('invoices' in value) || value['invoices'] === undefined) return false;
    return true;
}

export function InvoiceListResponseFromJSON(json: any): InvoiceListResponse {
    return InvoiceListResponseFromJSONTyped(json, false);
}

export function InvoiceListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'pageSize': json['page_size'],
        'invoices': ((json['invoices'] as Array<any>).map(InvoiceResponseFromJSON)),
    };
}

export function InvoiceListResponseToJSON(value?: InvoiceListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'invoices': ((value['invoices'] as Array<any>).map(InvoiceResponseToJSON)),
    };
}

