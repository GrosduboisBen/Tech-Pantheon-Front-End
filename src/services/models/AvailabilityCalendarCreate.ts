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
 * @interface AvailabilityCalendarCreate
 */
export interface AvailabilityCalendarCreate {
    /**
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    user_id: string;
    /**
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    start_date: string;
    /**
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    end_date: string;
    /**
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    status: string;
    /**
     * @type {string}
     * @memberof AvailabilityCalendarCreate
     */
    note: string | null;
}
