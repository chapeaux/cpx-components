class CPXWebDriver {
    browsers = new Map([
        ['chrome', {
            port: 9515,
            capabilities: {
                capabiliites: {
                    alwaysMatch: {
                        browserName: 'chrome',
                        "goog:chromeOptions":{ args:['headless'] },
                        webSocketUrl: true
                    }
                }
            }
        }],
        ['firefox', {
            port: 4444,
            capabilities: {
                capabilities: {
                    alwaysMatch: {
                        browserName: 'firefox',
                        "moz:firefoxOptions":{ 
                            "binary": "/usr/local/bin/firefox-nightly",
                            args:['-headless'] 
                        },
                        webSocketUrl: true
                    }
                }
            }
        }]
    ]);
    constructor(url='http://localhost',browser='chrome') {
        this.url = url;
        this.browser = browser;
        this.new = this.new.bind(this);
    }
    
    async status() {
        const resp = await fetch(new URL('./status',this.url+`:${this.browsers.get(this.browser).port}`), {
            headers:{ "Content-Type":'application/json'}
        });
        const data = await resp.json();
        return data;
    }
    async new() {
        //console.log(JSON.stringify(this.browsers.get(this.browser).capabilities));
        const resp = await fetch(new URL('./session',this.url+`:${this.browsers.get(this.browser).port}`),{
            headers:{ "Content-Type":'application/json'},
            method:'POST',
            body:JSON.stringify(this.browsers.get(this.browser).capabilities)
        });
        const data = await resp.json();
        this.session = data.value;
    }
    async delete() {
        const resp = await fetch(new URL(`./session/${this.session.sessionId}`,this.url+`:${this.browsers.get(this.browser).port}`),{method:'DELETE'});
        this.state = await resp.json();
    }
}

// const browser = new Worker(new URL("./webdriver.js", import.meta.url).href, { type: "module" });
// browser.onmessage = async (e) => {
//     switch (e.data) {
//         case 'started':
//             await runTests();
//             break;
//     }
// }
// browser.postMessage({msg:'start'});

async function runTests() {
    const wd = new CPXWebDriver('http://localhost','firefox');
    await wd.new();
    console.log(wd.session);
    await wd.delete();
    console.log('Status:',await wd.status());
    // browser.postMessage({msg:'stop'});
}
await runTests();