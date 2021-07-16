export interface Auth {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: BigInteger;
    scope: string
}
