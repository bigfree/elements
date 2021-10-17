import { AxiosResponse } from "axios";
import client from "../client";

/**
 * Fetch logged user
 * @returns {Promise<SpotifyApi.UserProfileResponse>}
 */
const fetchMe = async (): Promise<SpotifyApi.UserProfileResponse> => {
    const { data }: AxiosResponse<SpotifyApi.UserProfileResponse> = await client.get(`me`);
    return data;
}

export default fetchMe;