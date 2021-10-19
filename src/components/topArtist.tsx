import { FC } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchMeTopArtist } from "../client/me";

/**
 * Top artist component
 * @returns {JSX.Element}
 * @constructor
 */
const TopArtist: FC = (): JSX.Element => {
    const { data } = useQuery(`meTopArtist`, fetchMeTopArtist, {
        retry: false
    });

    console.log(data);

    return (
        <Box sx={{
            flex: '1 1 100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            maxWidth: '100vw',
            pt: 2,
        }}
        >
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={0}
            >
                <Typography
                    component={'div'}
                    variant={'h6'}
                    sx={{
                        pl: 2,
                    }}
                >
                    My Top Artists
                </Typography>
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    overflowX: 'scroll',
                    p: 2,
                    pr: 0,
                }}
            >
                {data?.items.map((item: SpotifyApi.ArtistObjectFull, index: number) => (
                    <Card
                        key={index}
                        sx={{
                            flex: '1 0 180px',
                            maxWidth: 180,
                            ml: 2,
                            '&:first-of-type': {
                                ml: 0
                            }
                        }}
                    >
                        <CardActionArea component={Link} to={`/artist/${item.id}`}>
                            <CardMedia
                                component={'img'}
                                height={'140px'}
                                image={item.images[1].url}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography
                                    variant={'body2'}
                                    component={'div'}
                                >
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default TopArtist