import { FC } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { fetchMeTopArtist } from "../client/me";

/**
 * Top artist component
 * @returns {JSX.Element}
 * @constructor
 */
const TopArtist: FC = (): JSX.Element => {
    const { data } = useQuery(`meTopArtist`, fetchMeTopArtist);

    console.log(data);

    return (
        <Box
            sx={{
                flex: '1 1 100%',
                display: 'flex',
                overflow: 'hidden',
                maxWidth: '100vw',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    overflowX: 'scroll',
                    p: 2,
                }}
            >
                {data?.items.map((item: SpotifyApi.ArtistObjectFull, index: number) => (
                    <Card
                        key={index}
                        sx={{
                            flex: '1 0 180px',
                            maxWidth: 180,
                            ml: 2,
                            '&:first-child': {
                                ml: 0
                            }
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140px"
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