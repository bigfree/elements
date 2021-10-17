import client from "../client";
import { AxiosResponse } from "axios";
import { SearchResponse } from "../../types/search";
import { LIMIT } from "../../constants/client";

/**
 * Fetch search
 * @returns {Promise<SpotifyApi.SearchResponse>}
 */
const fetchSearch = async (): Promise<SearchResponse> => {
    const { data }: AxiosResponse<SearchResponse> = await client.get(`search?q=luttrel&type=artist,album&limit=${LIMIT}`);
    return data;
}

export default fetchSearch;