interface CookiePayload {
    key: string;
    action?: string;
    data: string | Record<string, unknown>;
    parse?: string;
}
export declare class Baker {
    postMessage: (e: any) => void;
    onmessage: any;
    constructor(targetObj: any);
    getCookie(payload: CookiePayload): any;
    setCookie(payload: CookiePayload): any;
    parseJwt(token: any): any;
}
export {};
