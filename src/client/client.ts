import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { getUserTokenFromStorage } from "../services/storage";

let { userTokenParams } = getUserTokenFromStorage();
let axiosInstanceObject: AxiosRequestConfig;
let axiosRequestHeaders: AxiosRequestHeaders = {};

// If exist userTokeParams config headers
if (userTokenParams) {
    axiosRequestHeaders = {
        'Authorization': `${userTokenParams.token_type} ${userTokenParams.access_token}`,
    }
}

/**
 * Axios instance config object
 * @type {{headers: AxiosRequestHeaders, baseURL: any}}
 */
axiosInstanceObject = {
    baseURL: process.env.REACT_APP_API_URI,
    headers: axiosRequestHeaders,
};

/**
 * Create axios instance
 * @type {AxiosInstance}
 */
const client: AxiosInstance = axios.create(axiosInstanceObject);

export default client;