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

/**
 * @export
 * @interface FeedbackCreate
 */
export interface FeedbackCreate {
    /**
     * @type {string}
     * @memberof FeedbackCreate
     */
    user_id: string;
    /**
     * @type {string}
     * @memberof FeedbackCreate
     */
    project_id: string;
    /**
     * @type {string}
     * @memberof FeedbackCreate
     */
    feedback: string;
    /**
     * @type {number}
     * @memberof FeedbackCreate
     */
    rating: number;
}
