export type userTokenParams = {
    code?: string | null;
    access_token?: string | null;
    token_type: string | null;
    scope?: string | null;
    expires_in: number | null;
    refresh_token?: string | null;
    state: string | null,
    error?: string | null,
}

export type userToken = {
    isLogged?: boolean | null,
    userTokenParams: userTokenParams | null,
    expiryTime: number | null,
}