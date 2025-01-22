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
import type { TagResponse } from './TagResponse';
import {
    TagResponseFromJSON,
    TagResponseFromJSONTyped,
    TagResponseToJSON,
} from './TagResponse';

/**
 * 
 * @export
 * @interface TagListResponse
 */
export interface TagListResponse {
    /**
     * 
     * @type {number}
     * @memberof TagListResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof TagListResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof TagListResponse
     */
    pageSize: number;
    /**
     * 
     * @type {Array<TagResponse>}
     * @memberof TagListResponse
     */
    tags: Array<TagResponse>;
}

/**
 * Check if a given object implements the TagListResponse interface.
 */
export function instanceOfTagListResponse(value: object): value is TagListResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    return true;
}

export function TagListResponseFromJSON(json: any): TagListResponse {
    return TagListResponseFromJSONTyped(json, false);
}

export function TagListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'pageSize': json['page_size'],
        'tags': ((json['tags'] as Array<any>).map(TagResponseFromJSON)),
    };
}

export function TagListResponseToJSON(value?: TagListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'page': value['page'],
        'page_size': value['pageSize'],
        'tags': ((value['tags'] as Array<any>).map(TagResponseToJSON)),
    };
}

