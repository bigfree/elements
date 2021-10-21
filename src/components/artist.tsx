import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchArtistDetail } from "../client/artist";
import { Avatar, Badge, Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArtistTopTracks from "./artist-top-tracks";
import ArtistAlbums from "./artist-albums";

type TRouteParams = {
    type: string;
    id: string;
}

type TProps = {
    routeProps: RouteComponentProps<TRouteParams>;
}

/**
 * Artist component
 * @param {RouteComponentProps<TRouteParams>} routeProps
 * @returns {JSX.Element}
 * @constructor
 */
const Artist: FC<TProps> = ({ routeProps }: TProps): JSX.Element => {
    const { data, isLoading, status } = useQuery([
        'artist',
        routeProps.match.params.id
    ], () => fetchArtistDetail(routeProps.match.params.id));

    /**
     * Close artist sidebar
     */
    const closeArtist = () => {
        routeProps.history.push('/')
    }

    console.log(data);

    return (
        <Card
            sx={{
                maxWidth: 1,
                backgroundImage: 'none',
                borderRadius: 0,
                boxShadow: 0,
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                height: 1,
            }}
        >
            <CardHeader
                sx={{
                    borderBottom: 1,
                    borderColor: 'grey.900',
                    flexGrow: 0
                }}
                avatar={
                    <Avatar alt={data?.name} src={data?.images[2].url}/>
                }
                action={
                    <Box>
                        <Badge
                            badgeContent={data?.popularity}
                            color={'primary'}
                        >
                            <WhatshotIcon/>
                        </Badge>
                        <IconButton onClick={closeArtist} sx={{ ml: 1 }}>
                            <CloseIcon/>
                        </IconButton>
                    </Box>
                }
                title={
                    <Typography variant={'h6'}>{data?.name}</Typography>
                }
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    alignSelf: 'stretch',
                    overflowY: 'auto',
                }}
            >
                <ArtistTopTracks routeProps={routeProps}/>
                <ArtistAlbums routeProps={routeProps}/>
            </CardContent>
            <CardActions sx={{ borderTop: 1, borderColor: 'grey.900' }}>
                Card actions footer
            </CardActions>
        </Card>
    )
}
export default Artist