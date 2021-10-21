import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useInfiniteQuery } from "react-query";
import { fetchArtistAlbums } from "../client/artist";
import AlbumIcon from '@mui/icons-material/Album';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

type TRouteParams = {
    type: string;
    id: string;
}

type TProps = {
    routeProps: RouteComponentProps<TRouteParams>;
}

/**
 * Artist albums component
 * @param {RouteComponentProps<TRouteParams>} routeProps
 * @returns {JSX.Element}
 * @constructor
 */
const ArtistAlbums: FC<TProps> = ({ routeProps }: TProps): JSX.Element => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery([
        'artist',
        routeProps.match.params.id,
        'album,single'
    ], () => fetchArtistAlbums(routeProps.match.params.id), {
        getNextPageParam: (lastPage: SpotifyApi.ArtistsAlbumsResponse, pages: SpotifyApi.ArtistsAlbumsResponse[]) => {
            console.log(lastPage,pages);
            return lastPage.next;
        }
    });

    return (
        <Box>
            <Typography variant={'h6'} sx={{ mb: 2 }}>Albums</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                }}
            >
                {data?.pages.map((group: SpotifyApi.ArtistsAlbumsResponse, index: number) => (
                    <React.Fragment key={index}>
                        {group?.items.map((item: SpotifyApi.AlbumObjectSimplified, index: number) => (
                            <Card key={index} sx={{
                                flexBasis: 'calc(33% - 4px)',
                                aspectRatio: 'auto 1 / 1',
                                position: 'relative'
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component={'img'}
                                        height={'100%'}
                                        image={item.images[1].url}
                                        alt={item.name}
                                        loading={'lazy'}
                                    />
                                    <CardContent sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        background: 'rgba(0, 0, 0, .65)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end'
                                    }}>
                                        {item.type === "album" ? <AlbumIcon sx={{
                                            position: 'absolute',
                                            top: theme => theme.spacing(1),
                                            right: theme => theme.spacing(1),
                                            fontSize: 24,
                                            opacity: .9
                                        }}/> : <MusicNoteIcon sx={{
                                            position: 'absolute',
                                            top: theme => theme.spacing(1),
                                            right: theme => theme.spacing(1),
                                            fontSize: 24,
                                            opacity: .9
                                        }}/>}
                                        <Typography component={'div'} variant={'body1'}>
                                            <strong>{item.name}</strong>
                                        </Typography>
                                        <Typography component={'div'} variant={'caption'}>
                                            {item.release_date}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </React.Fragment>
                ))}
            </Box>
            {hasNextPage ? (
                <Button variant="outlined" size="small" onClick={() => fetchNextPage()}>
                    More
                </Button>
            ) : ''}
        </Box>
    )
}
export default ArtistAlbums