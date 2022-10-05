export class Baker {
    constructor(targetObj) {
        this.postMessage = e => {
            const payload = e.payload;
            switch (e.action) {
                case 'set':
                    this['onmessage']({ data: this.setCookie(payload) });
                    break;
                case 'get':
                default:
                    this['onmessage']({ data: this.getCookie(payload) });
                    break;
            }
        };
        this.onmessage = targetObj['onmessage'];
    }
    getCookie(payload) {
        let parsed;
        let cookieMap = new Map();
        if (typeof payload.data === 'string') {
            payload.data.split(';').map(v => {
                const rec = v.trim().split('=');
                cookieMap.set(rec[0], rec[1]);
            });
        }
        const cookieVal = cookieMap.get(payload.key);
        switch (payload.parse) {
            case 'jwt':
                parsed = this.parseJwt(cookieVal);
                break;
            case 'json':
                try {
                    parsed = JSON.parse(cookieVal || '{}');
                }
                catch (e) {
                    console.error("Unable to parse value as JSON. Detail:", e);
                    parsed = {};
                }
                break;
            default:
                parsed = JSON.parse(cookieVal || '{}');
                break;
        }
        return parsed;
    }
    setCookie(payload) {
        let parsed;
        switch (payload.parse) {
            case 'jwt':
                parsed = `${payload.key}=${payload.data};`;
                break;
            case 'json':
                if (typeof payload.data === 'string') {
                    eval(`payload.data = JSON.stringify(${payload.data})`);
                }
                parsed = `${payload.key}=${payload.data};`;
                break;
            default:
                parsed = `${payload.key}=${payload.data};`;
                break;
        }
        return parsed;
    }
    parseJwt(token) {
        if (token) {
            try {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                return JSON.parse(jsonPayload);
            }
            catch (e) {
                console.error("Unable to parse JWT. Detail:", e);
                return {};
            }
        }
        else {
            return {};
        }
    }
}
