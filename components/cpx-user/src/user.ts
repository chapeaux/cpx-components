function getCookies(cookies, values:Map<string,string>) {
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

onmessage = function(e) {
    if (e.data && e.data.action) {
        switch (e.data.action) {
            case 'getCookies':
                postMessage({action: e.data.action, results: getCookies(e.data.payload, e.data.values)});
            break;
            default:
                postMessage({});
            break;
        }
    }
}

class User {
    constructor(obj?:any) {
        
    }
    givenname = "";
    surname = "";
    custKey = "{custKey}";
    accountID = "<accountID>";
    accountIDType = "External";
    userID =  "<userID>";
    lastLoginDate =  "";
    loggedIn =  "false";
    registered = "true";
    socialAccountsLinked = "";
    subscriptionFrequency =  "";
    subscriptionLevel =  "";
    hashedEmail =  "";
}