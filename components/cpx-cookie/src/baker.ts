interface CookiePayload {
    key: string;
    data:string | Record<string, unknown>;
    parse?:string;
}

onmessage = function(e) {
    const payload:CookiePayload = e.data.payload;
    switch (e.data.action) {
        case 'set':
            postMessage(setCookie(payload));
        break;
        case 'get':
            postMessage(getCookie(payload));
        break;
        default:
            postMessage(new Map(payload.data.split(';')?.map(v=>v.trim().split('='))));
        break;
    }
}

function getCookie(payload:CookiePayload) {
    let parsed;
    switch (payload.parse) {
        case 'jwt':

        break;
        case 'json':
            try {
                const cookieMap = payload.data !== undefined ? new Map(payload.data.split(';').map(v=>v.trim().split('='))) : ;
                parsed = JSON.parse(cookieMap.get(payload.key));
            } catch(e) {
                console.error("Unable to parse value as JSON. Detail:",e);
                parsed = {};
            }
        break;
        default:
            parsed = (new Map(payload.data.split(';')?.map(v=>v.trim().split('=')))).get(payload.key);
        break;
    }
}

function setCookie(payload:CookiePayload) {
    let parsed;
    switch (payload.parse) {
        case 'jwt':
            parsed = `${payload.key}=${payload.data};`
        break;
        case 'json':
            parsed = `${payload.key}=${JSON.stringify(payload.data)};`
        break;
        default:
            parsed = `${payload.key}=${payload.data};`
        break;
    }
    return parsed;
}
