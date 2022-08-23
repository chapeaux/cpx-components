interface CookiePayload {
    key: string;
    data: string | Record<string, unknown>;
    parse?: string;
}
declare function getCookie(payload: CookiePayload): any;
declare function setCookie(payload: CookiePayload): any;
declare function parseJwt(token: any): any;
