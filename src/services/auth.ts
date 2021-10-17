import { v4 as uuid4 } from 'uuid';
import {
    getStateToStorage,
    getUserTokenFromStorage,
    removeFromStorageEngine,
    setStateToStorage,
    setUserTokenToStorage
} from "./storage";
import { convertUrlParamsToObject } from "./helper";

/**
 * Is logged
 * @returns {boolean}
 */
export const isLogged = (): boolean => {
    const userToken = getUserTokenFromStorage();
    return !!(userToken.userTokenParams && userToken.expiryTime);
}

/**
 * SignIn to spotify
 * @param {string} hash
 * @returns {boolean}
 */
export const loginProcess = (hash: string): boolean => {
    const userTokenParams = convertUrlParamsToObject(hash);

    // Computed expiry time from now to 1 hour
    const expiryTime = computedExpiryTime(userTokenParams.expires_in);

    // Set user token to storage
    setUserTokenToStorage({
        userTokenParams,
        expiryTime
    });

    // Compare state
    return isValidState(userTokenParams.state);
}

/**
 * Compute login url to spotify
 * @constructor
 */
export const computeLoginUrl = () => {
    const {
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_API_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT,
        REACT_APP_SPOTIFY_RESPONSE_TYPE,
        REACT_APP_SPOTIFY_SHOW_DIALOG
    } = process.env;

    // Generate state
    const state = uuid4();

    // Set state to storage
    setStateToStorage(state);

    window.location.href = `${REACT_APP_API_AUTHORIZE_URL}authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT}&response_type=${REACT_APP_SPOTIFY_RESPONSE_TYPE}&state=${state}&show_dialog=${REACT_APP_SPOTIFY_SHOW_DIALOG}`;
}

/**
 * Compare private state and spotify return state
 * @param {string} state
 * @returns {boolean}
 */
const isValidState = (state: string | null): boolean => {
    const privateState = getStateToStorage();

    if (state !== privateState) {
        removeFromStorageEngine('state');
        return false;
    }

    return true;
}

/**
 * Computed expiry time from now to 1 hour
 * @param {number | null} expiryTime
 * @returns {number | null}
 */
const computedExpiryTime = (expiryTime: number | null): number | null => {
    return expiryTime ? new Date().getTime() + expiryTime * 1000 : null;
}
