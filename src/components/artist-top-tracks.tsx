import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchArtistTopTracks } from "../client/artist";
import { Box, List, ListItem, Typography } from "@mui/material";
import { convertMsToMinutes } from "../services/helper";

type TRouteParams = {
    type: string;
    id: string;
}

type TProps = {
    routeProps: RouteComponentProps<TRouteParams>;
}

/**
 * Artist Top track component
 * @returns {JSX.Element}
 * @constructor
 */
const ArtistTopTracks: FC<TProps> = ({ routeProps }: TProps): JSX.Element => {
    const { data, isLoading, status } = useQuery([
        'artist',
        routeProps.match.params.id,
        'topTracks'
    ], () => fetchArtistTopTracks(routeProps.match.params.id));

    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Top Tracks</Typography>
            <List sx={{
                border: 1,
                borderColor: 'grey.900',
                py: 0
            }}>
                {data?.tracks.map((track: SpotifyApi.TrackObjectFull, index: number) => (
                    <ListItem
                        key={index}
                        sx={{
                            borderBottom: 1,
                            borderColor: 'grey.900',
                            py: 1.5,
                            px: 0,
                            flexWrap: 'nowrap',
                            '&:last-of-type': {
                                borderBottom: 0
                            }
                        }}
                    >
                        <Typography
                            variant={'body2'}
                            sx={{
                                flex: '0 0 40px',
                                textAlign: 'center'
                            }}
                        >
                            {index + 1}.
                        </Typography>
                        <Typography
                            variant={'body2'}
                            sx={{
                                flex: '1 1 auto',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                pr: 1,
                            }}
                        >
                            {track.name}
                        </Typography>
                        <Typography
                            variant={'body2'}
                            sx={{
                                flex: '0 0 55px',
                                textAlign: 'center',
                                alignSelf: 'flex-end'
                            }}
                        >
                            {convertMsToMinutes(track.duration_ms)}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default ArtistTopTracks