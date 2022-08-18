"use strict";
onmessage = function (e) {
    var _a, _b;
    const payload = e.data.payload;
    let parsed;
    switch (e.data.action) {
        case 'set':
            switch (payload.method) {
                case 'jwt':
                    parsed = `${payload.key}=${payload.data};`;
                    break;
                case 'json':
                    parsed = `${payload.key}=${JSON.stringify(payload.value)};`;
                    break;
                default:
                    parsed = `${payload.key}=${payload.value};`;
                    break;
            }
            postMessage(parsed);
            break;
        case 'parse':
            switch (payload.method) {
                case 'jwt':
                    break;
                case 'json':
                    try {
                        parsed = JSON.parse(payload.data);
                    }
                    catch (e) {
                        console.error("Unable to parse value as JSON.", e);
                        parsed = {};
                    }
                    break;
                default:
                    parsed = (new Map((_a = payload.data.split(';')) === null || _a === void 0 ? void 0 : _a.map(v => v.trim().split('=')))).get(payload.key);
                    break;
            }
            postMessage(parsed);
            break;
        default:
            postMessage(new Map((_b = payload.data.split(';')) === null || _b === void 0 ? void 0 : _b.map(v => v.trim().split('='))));
            break;
    }
};
