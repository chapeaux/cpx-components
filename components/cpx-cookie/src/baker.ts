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
        default:
            postMessage(getCookie(payload));
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
                const cookieMap = new Map();
                if (typeof payload.data === 'string') {
                    payload.data.split(';').map(v=> {
                        const rec = v.trim().split('=');
                        cookieMap.set(rec[0],rec[1]);
                    });
                }
                const cookieVal = cookieMap.get(payload.key);
                parsed = JSON.parse(cookieVal || '{}');
            } catch(e) {
                console.error("Unable to parse value as JSON. Detail:",e);
                parsed = {};
            }
        break;
        default:
            const cookieMap = new Map();
            if (typeof payload.data === 'string') {
                payload.data.split(';').map(v=> {
                    const rec = v.trim().split('=');
                    cookieMap.set(rec[0],rec[1]);
                });
            }
            parsed = JSON.parse(cookieMap.get(payload.key));
            //parsed = (new Map(payload.data.split(';')?.map(v=>v.trim().split('=')))).get(payload.key);
        break;
    }
    return parsed;
}

function setCookie(payload:CookiePayload) {
    let parsed;
    switch (payload.parse) {
        case 'jwt':
            parsed = `${payload.key}=${payload.data};`
        break;
        case 'json':
            if (typeof payload.data === 'string') {
                eval(`payload.data = JSON.stringify(${payload.data})`)
            }
            parsed = `${payload.key}=${payload.data};`
        break;
        default:
            parsed = `${payload.key}=${payload.data};`
        break;
    }
    return parsed;
}
