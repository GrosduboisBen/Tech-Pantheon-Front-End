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


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  TechnologyCreate,
  TechnologyListResponse,
  TechnologyResponse,
  TechnologyUpdate,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    TechnologyCreateFromJSON,
    TechnologyCreateToJSON,
    TechnologyListResponseFromJSON,
    TechnologyListResponseToJSON,
    TechnologyResponseFromJSON,
    TechnologyResponseToJSON,
    TechnologyUpdateFromJSON,
    TechnologyUpdateToJSON,
} from '../models/index';

export interface CreateApiTechnologiesPostRequest {
    technologyCreate: TechnologyCreate;
}

export interface DeleteApiTechnologiesTechnologyIdDeleteRequest {
    technologyId: string;
}

export interface ReadTechnologiesApiTechnologiesGetRequest {
    page?: number;
    pageSize?: number;
}

export interface ReadTechnologyApiTechnologiesTechnologyIdGetRequest {
    technologyId: string;
}

export interface UpdateApiTechnologiesTechnologyIdPutRequest {
    technologyId: string;
    technologyUpdate: TechnologyUpdate;
}

/**
 * TechnologiesApi - interface
 * 
 * @export
 * @interface TechnologiesApiInterface
 */
export interface TechnologiesApiInterface {
    /**
     * Create a new technology.
     * @summary Create
     * @param {TechnologyCreate} technologyCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TechnologiesApiInterface
     */
    createApiTechnologiesPostRaw(requestParameters: CreateApiTechnologiesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyResponse>>;

    /**
     * Create a new technology.
     * Create
     */
    createApiTechnologiesPost(technologyCreate: TechnologyCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyResponse>;

    /**
     * Delete a technology by ID.
     * @summary Delete
     * @param {string} technologyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TechnologiesApiInterface
     */
    deleteApiTechnologiesTechnologyIdDeleteRaw(requestParameters: DeleteApiTechnologiesTechnologyIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Delete a technology by ID.
     * Delete
     */
    deleteApiTechnologiesTechnologyIdDelete(technologyId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * Retrieve a list of technologies with pagination.
     * @summary Read Technologies
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TechnologiesApiInterface
     */
    readTechnologiesApiTechnologiesGetRaw(requestParameters: ReadTechnologiesApiTechnologiesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyListResponse>>;

    /**
     * Retrieve a list of technologies with pagination.
     * Read Technologies
     */
    readTechnologiesApiTechnologiesGet(page?: number, pageSize?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyListResponse>;

    /**
     * Retrieve a technology by ID.
     * @summary Read Technology
     * @param {string} technologyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TechnologiesApiInterface
     */
    readTechnologyApiTechnologiesTechnologyIdGetRaw(requestParameters: ReadTechnologyApiTechnologiesTechnologyIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyResponse>>;

    /**
     * Retrieve a technology by ID.
     * Read Technology
     */
    readTechnologyApiTechnologiesTechnologyIdGet(technologyId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyResponse>;

    /**
     * Update a technology by ID.
     * @summary Update
     * @param {string} technologyId 
     * @param {TechnologyUpdate} technologyUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TechnologiesApiInterface
     */
    updateApiTechnologiesTechnologyIdPutRaw(requestParameters: UpdateApiTechnologiesTechnologyIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyResponse>>;

    /**
     * Update a technology by ID.
     * Update
     */
    updateApiTechnologiesTechnologyIdPut(technologyId: string, technologyUpdate: TechnologyUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyResponse>;

}

/**
 * 
 */
export class TechnologiesApi extends runtime.BaseAPI implements TechnologiesApiInterface {

    /**
     * Create a new technology.
     * Create
     */
    async createApiTechnologiesPostRaw(requestParameters: CreateApiTechnologiesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyResponse>> {
        if (requestParameters['technologyCreate'] == null) {
            throw new runtime.RequiredError(
                'technologyCreate',
                'Required parameter "technologyCreate" was null or undefined when calling createApiTechnologiesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/technologies/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TechnologyCreateToJSON(requestParameters['technologyCreate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechnologyResponseFromJSON(jsonValue));
    }

    /**
     * Create a new technology.
     * Create
     */
    async createApiTechnologiesPost(technologyCreate: TechnologyCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyResponse> {
        const response = await this.createApiTechnologiesPostRaw({ technologyCreate: technologyCreate }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a technology by ID.
     * Delete
     */
    async deleteApiTechnologiesTechnologyIdDeleteRaw(requestParameters: DeleteApiTechnologiesTechnologyIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['technologyId'] == null) {
            throw new runtime.RequiredError(
                'technologyId',
                'Required parameter "technologyId" was null or undefined when calling deleteApiTechnologiesTechnologyIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/technologies/{technology_id}`.replace(`{${"technology_id"}}`, encodeURIComponent(String(requestParameters['technologyId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete a technology by ID.
     * Delete
     */
    async deleteApiTechnologiesTechnologyIdDelete(technologyId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteApiTechnologiesTechnologyIdDeleteRaw({ technologyId: technologyId }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of technologies with pagination.
     * Read Technologies
     */
    async readTechnologiesApiTechnologiesGetRaw(requestParameters: ReadTechnologiesApiTechnologiesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page_size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/technologies/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechnologyListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of technologies with pagination.
     * Read Technologies
     */
    async readTechnologiesApiTechnologiesGet(page?: number, pageSize?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyListResponse> {
        const response = await this.readTechnologiesApiTechnologiesGetRaw({ page: page, pageSize: pageSize }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a technology by ID.
     * Read Technology
     */
    async readTechnologyApiTechnologiesTechnologyIdGetRaw(requestParameters: ReadTechnologyApiTechnologiesTechnologyIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyResponse>> {
        if (requestParameters['technologyId'] == null) {
            throw new runtime.RequiredError(
                'technologyId',
                'Required parameter "technologyId" was null or undefined when calling readTechnologyApiTechnologiesTechnologyIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/technologies/{technology_id}`.replace(`{${"technology_id"}}`, encodeURIComponent(String(requestParameters['technologyId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechnologyResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a technology by ID.
     * Read Technology
     */
    async readTechnologyApiTechnologiesTechnologyIdGet(technologyId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyResponse> {
        const response = await this.readTechnologyApiTechnologiesTechnologyIdGetRaw({ technologyId: technologyId }, initOverrides);
        return await response.value();
    }

    /**
     * Update a technology by ID.
     * Update
     */
    async updateApiTechnologiesTechnologyIdPutRaw(requestParameters: UpdateApiTechnologiesTechnologyIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TechnologyResponse>> {
        if (requestParameters['technologyId'] == null) {
            throw new runtime.RequiredError(
                'technologyId',
                'Required parameter "technologyId" was null or undefined when calling updateApiTechnologiesTechnologyIdPut().'
            );
        }

        if (requestParameters['technologyUpdate'] == null) {
            throw new runtime.RequiredError(
                'technologyUpdate',
                'Required parameter "technologyUpdate" was null or undefined when calling updateApiTechnologiesTechnologyIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/technologies/{technology_id}`.replace(`{${"technology_id"}}`, encodeURIComponent(String(requestParameters['technologyId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TechnologyUpdateToJSON(requestParameters['technologyUpdate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TechnologyResponseFromJSON(jsonValue));
    }

    /**
     * Update a technology by ID.
     * Update
     */
    async updateApiTechnologiesTechnologyIdPut(technologyId: string, technologyUpdate: TechnologyUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TechnologyResponse> {
        const response = await this.updateApiTechnologiesTechnologyIdPutRaw({ technologyId: technologyId, technologyUpdate: technologyUpdate }, initOverrides);
        return await response.value();
    }

}
