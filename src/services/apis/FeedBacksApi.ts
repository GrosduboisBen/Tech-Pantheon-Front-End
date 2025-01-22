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
  FeedbackCreate,
  FeedbackListResponse,
  FeedbackResponse,
  FeedbackUpdate,
  HTTPValidationError,
} from '../models/index';
import {
    FeedbackCreateFromJSON,
    FeedbackCreateToJSON,
    FeedbackListResponseFromJSON,
    FeedbackListResponseToJSON,
    FeedbackResponseFromJSON,
    FeedbackResponseToJSON,
    FeedbackUpdateFromJSON,
    FeedbackUpdateToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface CreateApiFeedbacksPostRequest {
    feedbackCreate: FeedbackCreate;
}

export interface DeleteApiFeedbacksFeedbackIdDeleteRequest {
    feedbackId: string;
}

export interface ReadFeedbackApiFeedbacksFeedbackIdGetRequest {
    feedbackId: string;
}

export interface ReadFeedbacksApiFeedbacksGetRequest {
    page?: number;
    pageSize?: number;
}

export interface UpdateApiFeedbacksFeedbackIdPutRequest {
    feedbackId: string;
    feedbackUpdate: FeedbackUpdate;
}

/**
 * FeedBacksApi - interface
 * 
 * @export
 * @interface FeedBacksApiInterface
 */
export interface FeedBacksApiInterface {
    /**
     * Create a new feedback.
     * @summary Create
     * @param {FeedbackCreate} feedbackCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedBacksApiInterface
     */
    createApiFeedbacksPostRaw(requestParameters: CreateApiFeedbacksPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackResponse>>;

    /**
     * Create a new feedback.
     * Create
     */
    createApiFeedbacksPost(feedbackCreate: FeedbackCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackResponse>;

    /**
     * Delete a feedback by ID.
     * @summary Delete
     * @param {string} feedbackId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedBacksApiInterface
     */
    deleteApiFeedbacksFeedbackIdDeleteRaw(requestParameters: DeleteApiFeedbacksFeedbackIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Delete a feedback by ID.
     * Delete
     */
    deleteApiFeedbacksFeedbackIdDelete(feedbackId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * Retrieve a feedback by ID.
     * @summary Read Feedback
     * @param {string} feedbackId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedBacksApiInterface
     */
    readFeedbackApiFeedbacksFeedbackIdGetRaw(requestParameters: ReadFeedbackApiFeedbacksFeedbackIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackResponse>>;

    /**
     * Retrieve a feedback by ID.
     * Read Feedback
     */
    readFeedbackApiFeedbacksFeedbackIdGet(feedbackId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackResponse>;

    /**
     * Retrieve a list of feedbacks with pagination.
     * @summary Read Feedbacks
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedBacksApiInterface
     */
    readFeedbacksApiFeedbacksGetRaw(requestParameters: ReadFeedbacksApiFeedbacksGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackListResponse>>;

    /**
     * Retrieve a list of feedbacks with pagination.
     * Read Feedbacks
     */
    readFeedbacksApiFeedbacksGet(page?: number, pageSize?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackListResponse>;

    /**
     * Update a feedback by ID.
     * @summary Update
     * @param {string} feedbackId 
     * @param {FeedbackUpdate} feedbackUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedBacksApiInterface
     */
    updateApiFeedbacksFeedbackIdPutRaw(requestParameters: UpdateApiFeedbacksFeedbackIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackResponse>>;

    /**
     * Update a feedback by ID.
     * Update
     */
    updateApiFeedbacksFeedbackIdPut(feedbackId: string, feedbackUpdate: FeedbackUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackResponse>;

}

/**
 * 
 */
export class FeedBacksApi extends runtime.BaseAPI implements FeedBacksApiInterface {

    /**
     * Create a new feedback.
     * Create
     */
    async createApiFeedbacksPostRaw(requestParameters: CreateApiFeedbacksPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackResponse>> {
        if (requestParameters['feedbackCreate'] == null) {
            throw new runtime.RequiredError(
                'feedbackCreate',
                'Required parameter "feedbackCreate" was null or undefined when calling createApiFeedbacksPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/feedbacks/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FeedbackCreateToJSON(requestParameters['feedbackCreate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedbackResponseFromJSON(jsonValue));
    }

    /**
     * Create a new feedback.
     * Create
     */
    async createApiFeedbacksPost(feedbackCreate: FeedbackCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackResponse> {
        const response = await this.createApiFeedbacksPostRaw({ feedbackCreate: feedbackCreate }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a feedback by ID.
     * Delete
     */
    async deleteApiFeedbacksFeedbackIdDeleteRaw(requestParameters: DeleteApiFeedbacksFeedbackIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['feedbackId'] == null) {
            throw new runtime.RequiredError(
                'feedbackId',
                'Required parameter "feedbackId" was null or undefined when calling deleteApiFeedbacksFeedbackIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/feedbacks/{feedback_id}`.replace(`{${"feedback_id"}}`, encodeURIComponent(String(requestParameters['feedbackId']))),
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
     * Delete a feedback by ID.
     * Delete
     */
    async deleteApiFeedbacksFeedbackIdDelete(feedbackId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteApiFeedbacksFeedbackIdDeleteRaw({ feedbackId: feedbackId }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a feedback by ID.
     * Read Feedback
     */
    async readFeedbackApiFeedbacksFeedbackIdGetRaw(requestParameters: ReadFeedbackApiFeedbacksFeedbackIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackResponse>> {
        if (requestParameters['feedbackId'] == null) {
            throw new runtime.RequiredError(
                'feedbackId',
                'Required parameter "feedbackId" was null or undefined when calling readFeedbackApiFeedbacksFeedbackIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/feedbacks/{feedback_id}`.replace(`{${"feedback_id"}}`, encodeURIComponent(String(requestParameters['feedbackId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedbackResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a feedback by ID.
     * Read Feedback
     */
    async readFeedbackApiFeedbacksFeedbackIdGet(feedbackId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackResponse> {
        const response = await this.readFeedbackApiFeedbacksFeedbackIdGetRaw({ feedbackId: feedbackId }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of feedbacks with pagination.
     * Read Feedbacks
     */
    async readFeedbacksApiFeedbacksGetRaw(requestParameters: ReadFeedbacksApiFeedbacksGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page_size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/feedbacks/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedbackListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of feedbacks with pagination.
     * Read Feedbacks
     */
    async readFeedbacksApiFeedbacksGet(page?: number, pageSize?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackListResponse> {
        const response = await this.readFeedbacksApiFeedbacksGetRaw({ page: page, pageSize: pageSize }, initOverrides);
        return await response.value();
    }

    /**
     * Update a feedback by ID.
     * Update
     */
    async updateApiFeedbacksFeedbackIdPutRaw(requestParameters: UpdateApiFeedbacksFeedbackIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackResponse>> {
        if (requestParameters['feedbackId'] == null) {
            throw new runtime.RequiredError(
                'feedbackId',
                'Required parameter "feedbackId" was null or undefined when calling updateApiFeedbacksFeedbackIdPut().'
            );
        }

        if (requestParameters['feedbackUpdate'] == null) {
            throw new runtime.RequiredError(
                'feedbackUpdate',
                'Required parameter "feedbackUpdate" was null or undefined when calling updateApiFeedbacksFeedbackIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/feedbacks/{feedback_id}`.replace(`{${"feedback_id"}}`, encodeURIComponent(String(requestParameters['feedbackId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FeedbackUpdateToJSON(requestParameters['feedbackUpdate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedbackResponseFromJSON(jsonValue));
    }

    /**
     * Update a feedback by ID.
     * Update
     */
    async updateApiFeedbacksFeedbackIdPut(feedbackId: string, feedbackUpdate: FeedbackUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackResponse> {
        const response = await this.updateApiFeedbacksFeedbackIdPutRaw({ feedbackId: feedbackId, feedbackUpdate: feedbackUpdate }, initOverrides);
        return await response.value();
    }

}
