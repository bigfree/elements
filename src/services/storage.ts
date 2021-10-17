import { userToken, userTokenParams } from "../types/auth";

/** @type {string} **/
const USER_TOKEN_PARAMS_STORAGE_NAME = 'userTokenParams';
/** @type {string} **/
const EXPIRY_TIME_STORAGE_NAME = 'expiryTime';
/** @type {string} **/
const STATE_STORAGE_NAME = 'state';

/**
 * Get user token from storage
 * @returns {userToken}
 */
export const getUserTokenFromStorage = (): userToken => {
    return {
        'userTokenParams': getUserTokenParamsFromStorage(),
        'expiryTime': getAuthExpiryTimeFromStorage(),
    }
}

/**
 * Set user token to storage
 * @param {userToken} userToken
 */
export const setUserTokenToStorage = (userToken: userToken): void => {
    const {userTokenParams, expiryTime} = userToken;

    if (userTokenParams) {
        setUserTokenParamsToStorage(userTokenParams);
    }
    if (expiryTime) {
        setAuthExpiryTimeToStorage(expiryTime);
    }
}

/**
 * Set state to storage
 * @param {string} state
 */
export const setStateToStorage = (state: string): void => {
    setStorageEngineValue(STATE_STORAGE_NAME, state);
}

/**
 * Get State from storage
 * @returns {string}
 */
export const getStateToStorage = (): string | null => {
    return getStorageEngineValue(STATE_STORAGE_NAME) ?? null;
}

/**
 * Set auth params to storage
 * @param {userTokenParams} params
 */
export const setUserTokenParamsToStorage = (params: userTokenParams): void => {
    setStorageEngineValue(USER_TOKEN_PARAMS_STORAGE_NAME, JSON.stringify(params));
}

/**
 * Get auth params from storage
 * @returns {userTokenParams | null}
 */
export const getUserTokenParamsFromStorage = (): userTokenParams | null => {
    const userTokenParams: string | null = getStorageEngineValue(USER_TOKEN_PARAMS_STORAGE_NAME);
    return userTokenParams ? JSON.parse(userTokenParams) as userTokenParams : null;
}

/**
 * Set auth expiry time to storage
 * @param {number} expiryTime
 */
export const setAuthExpiryTimeToStorage = (expiryTime: number): void => {
    setStorageEngineValue(EXPIRY_TIME_STORAGE_NAME, expiryTime);
}

export const getAuthExpiryTimeFromStorage = (): number | null => {
    return Number(getStorageEngineValue(EXPIRY_TIME_STORAGE_NAME)) ?? null;
}

/**
 * Remove from storage by key
 * @param {string} key
 */
export const removeFromStorageEngine = (key: string): void => {
    localStorage.removeItem(key);
}

/**
 * Set storage engine values
 * @param {string} key
 * @param value
 */
const setStorageEngineValue = (key: string, value: any): void => {
    localStorage.setItem(key, value);
}

/**
 * Get storage engine value by key
 * @param {string} key
 * @returns {string | null}
 */
const getStorageEngineValue = (key: string) => {
    return localStorage.getItem(key);
}
