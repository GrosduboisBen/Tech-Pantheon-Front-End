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
 * @interface UserCreate
 */
export interface UserCreate {
    /**
     * @type {string}
     * @memberof UserCreate
     */
    name: string;
    /**
     * @type {string}
     * @memberof UserCreate
     */
    email: string;
    /**
     * @type {string}
     * @memberof UserCreate
     */
    description: string | null;
    /**
     * @type {string}
     * @memberof UserCreate
     */
    main_job: string | null;
    /**
     * @type {string}
     * @memberof UserCreate
     */
    password: string;
}
