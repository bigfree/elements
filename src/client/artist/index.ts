import { AxiosResponse } from "axios";
import client from "../client";

/**
 * Fetch artist full object
 * @param {string} artistId
 * @returns {Promise<SpotifyApi.ArtistObjectFull>}
 */
const fetchArtistDetail = async (artistId: string): Promise<SpotifyApi.ArtistObjectFull> => {
    const { data }: AxiosResponse<SpotifyApi.ArtistObjectFull> = await client.get(`artists/${artistId}`);
    return data;
}

/**
 * Fetch artist top tracks
 * @param {string} artistId
 * @returns {Promise<SpotifyApi.ArtistsTopTracksResponse>}
 */
const fetchArtistTopTracks = async (artistId: string): Promise<SpotifyApi.ArtistsTopTracksResponse> => {
    const { data }: AxiosResponse<SpotifyApi.ArtistsTopTracksResponse> = await client.get(`artists/${artistId}/top-tracks?market=CZ`);
    return data;
}

/**
 * Fetch artist albums
 * @param {string} artistId
 * @returns {Promise<SpotifyApi.ArtistsAlbumsResponse>}
 */
const fetchArtistAlbums = async (artistId: string): Promise<SpotifyApi.ArtistsAlbumsResponse> => {
    const url = `artists/${artistId}/albums?include_groups=album,single&offset=0&limit=9`;
    const { data }: AxiosResponse<SpotifyApi.ArtistsAlbumsResponse> = await client.get(url);
    return data;
}

export { fetchArtistDetail, fetchArtistTopTracks, fetchArtistAlbums }