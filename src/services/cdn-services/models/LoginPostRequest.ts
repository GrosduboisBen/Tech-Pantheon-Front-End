// tslint:disable
/**
 * Secure CDN API
 * API for managing a secure CDN with JWT authentication
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
 * @interface LoginPostRequest
 */
export interface LoginPostRequest {
    /**
     * @type {string}
     * @memberof LoginPostRequest
     */
    userId: string;
    /**
     * @type {string}
     * @memberof LoginPostRequest
     */
    password: string;
}
