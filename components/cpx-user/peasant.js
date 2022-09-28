export class Peasant {
    constructor(targetObj) {
        this.postMessage = e => {
            const payload = e.payload;
            switch (e.action) {
                case 'getCookies':
                    this['onmessage']({ data: { action: e.data.action, results: this.getCookies(e.data.payload, e.data.values) } });
                    break;
                default:
                    this['onmessage']({ data: {} });
                    break;
            }
        };
        this.onmessage = targetObj['onmessage'];
    }
    getCookies(cookies, values) {
        let obj = {};
        let cookieMap = new Map();
        cookies.split(';').map(v => {
            const rec = v.trim().split('=');
            cookieMap.set(rec[0], rec[1]);
        });
        for (const [key, value] of values) {
            obj[value] = cookieMap.get(key) || '';
        }
        return obj;
    }
}
