interface CookiePayload {
    key: string;
    action?:string;
    data:string | Record<string, unknown>;
    parse?:string;
}

export class Peasant {
    postMessage = e => {
        const payload:CookiePayload = e.payload;
        switch (e.action) {
            case 'getCookies':
                this['onmessage']({data: {action: e.action, results: this.getCookies(e.payload, e.values)}});
            break;
            default:
                this['onmessage']({data:{}});
            break;
        }
    }
    onmessage;
    constructor(targetObj) {
        this.onmessage = targetObj['onmessage'];
    }

    getCookies(cookies, values:Map<string,string>) {
        let obj = {};
        let cookieMap = new Map();
        cookies.split(';').map(v=> {
            const rec = v.trim().split('=');
            cookieMap.set(rec[0],rec[1]);
        });
        
        for (const [key,value] of values) {
            obj[value] = cookieMap.get(key) || '';
        }
        return obj;
    }
}
