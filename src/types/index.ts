export type userMenuType = {
    icon?: JSX.Element;
    name: string;
    divider?: boolean;
    onClick?: () => void;
}

export type UserComponentPropsType = {
    data: SpotifyApi.UserProfileResponse | undefined;
    status: string;
}