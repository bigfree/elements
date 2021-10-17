import { AxiosResponse } from "axios";
import client from "../client";
import { getUserTokenFromStorage } from "../../services/storage";

/**
 * Not USE
 * @ignore
 * @returns {Promise<any>}
 */
const fetchToken = async (): Promise<any> => {
    const {
        REACT_APP_API_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT,
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_SPOTIFY_CLIENT_SECRET
    } = process.env;
    const { userTokenParams } = getUserTokenFromStorage();

    const { data }: AxiosResponse<any> = await client.post(`${REACT_APP_API_AUTHORIZE_URL}api/token`, {
        'grant_type': 'authorization_code',
        'code': userTokenParams ? userTokenParams.access_token : '',
        'redirect_uri': REACT_APP_SPOTIFY_REDIRECT
    }, {
        headers: {
            'Authorization': `Basic ${btoa(REACT_APP_SPOTIFY_CLIENT_ID + ':' + REACT_APP_SPOTIFY_CLIENT_SECRET)}`
        }
    });
    return data;
}

export default fetchToken