export type SearchResponse = Partial<SpotifyApi.ArtistSearchResponse>
    & Partial<SpotifyApi.AlbumSearchResponse>
    & Partial<SpotifyApi.TrackSearchResponse>
    & Partial<SpotifyApi.PlaylistSearchResponse>
    & Partial<SpotifyApi.ShowSearchResponse>
    & Partial<SpotifyApi.EpisodeSearchResponse>;