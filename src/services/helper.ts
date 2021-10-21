import { userTokenParams } from "../types/auth";

/**
 * Convert URI Params to object
 * @param {string} url
 * @returns {userTokenParams}
 */
export const convertUrlParamsToObject = (url: string): userTokenParams => {
    // remove the "?", "&" and "="
    const paramsArr = url.slice(1).split(/[&=]/) as [];
    const params: userTokenParams = { state: null, access_token: null, expires_in: null, token_type: null };

    for (let i = 0; i < paramsArr.length; i += 2) {
        // build the object = { access_token: "", token_type: "", expires_in: "" }
        params[paramsArr[i]] = paramsArr[i + 1];
    }
    return params;
};

/**
 * Convert ms to minutes
 * @param {number} ms
 * @returns {string}
 */
export const convertMsToMinutes = (ms: number): string => {
    const date = new Date(ms);
    return `${date.getMinutes()}:${date.getSeconds()}` as string;
}