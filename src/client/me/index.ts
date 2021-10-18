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

/**
 * Fetch my top artist
 * @returns {Promise<SpotifyApi.UsersTopArtistsResponse>}
 */
const fetchMeTopArtist = async (): Promise<SpotifyApi.UsersTopArtistsResponse> => {
    const { data }: AxiosResponse<SpotifyApi.UsersTopArtistsResponse> = await client.get(`me/top/artists`);
    return data;
}

export { fetchMe, fetchMeTopArtist }