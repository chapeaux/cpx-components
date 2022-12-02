import { decode as b64Decode } from 'https://deno.land/std/encoding/base64.ts';

class CPXWebDriver {
    browsers = new Map([
        ['chrome', {
            port: 9515,
            capabilities: {
                capabilities: {
                    alwaysMatch: {
                        browserName: 'chrome',
                        "goog:chromeOptions":{ args:['headless'] },
                        webSocketUrl: true,
                        acceptInsecureCerts: true
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
                            "binary": "/usr/bin/firefox",
                            args:['-headless'] 
                        },
                        webSocketUrl: true,
                        acceptInsecureCerts: true
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
        //console.log("STATUS URL:",new URL('./status',this.url+`:${this.browsers.get(this.browser).port}`))
        const resp = await fetch(new URL('./status',this.url+`:${this.browsers.get(this.browser).port}`), {
            headers:{ 
                "Content-Type":'application/json',
                "Origin":"http://localhost:4444"
            }
        });
        const data = await resp.json();
        // let upd = this.browsers.get(this.browser);
        // upd.capabilities.capabilities.alwaysMatch['browserVersion'] = data.value.build.version;
        // this.browsers.set(this.browser, upd);
        return data;
    }

    async takeScreenshot(path) {
        const resp = await fetch(new URL(`./session/${this.session.sessionId}/screenshot`, this.url+`:${this.browsers.get(this.browser).port}`));
        const data = await resp.json();
        let Image = data.value;
        Image = Image.replace("data:image/png;base64,", "");
        Image = Image.replace(" ", "+");
        let DecodedImage = b64Decode(Image);
        await Deno.writeFile(path, DecodedImage);
    }

    async navigateTo(url) {
        //console.log('NavURL',new URL('./',this.url+`:${this.browsers.get(this.browser).port}`))
        const resp = await fetch(new URL('./url',this.url+`:${this.browsers.get(this.browser).port}`),{
            headers:{ "Content-Type":'application/json'},
            method:'POST',
            body:JSON.stringify({url: url})
        });
        const data = await resp.json();
        console.log('NavigateTo:',data);
    }

    async new() {
        //console.log(JSON.stringify(this.browsers.get(this.browser).capabilities));
        const resp = await fetch(new URL('./session',this.url+`:${this.browsers.get(this.browser).port}`),{
            headers:{ "Content-Type":'application/json'},
            method:'POST',
            body:JSON.stringify(this.browsers.get(this.browser).capabilities)
        });
        const data = await resp.json();
        console.log("NEW:",data);
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
    const wd = new CPXWebDriver('http://localhost','chrome');
    console.log('Status:', await wd.status());
    await wd.new();
    //console.log(wd.session);
    await wd.navigateTo('https://access.redhat.com');
    await wd.takeScreenshot('./screenshot.png')
    await wd.delete();
    // browser.postMessage({msg:'stop'});
}
await runTests();


/* 
NOTES:

Container
  * podman run -it -p 9515:9515 --name crdriver localhost/chromedriver-ubi /bin/bash
  * podman run -it -p 4444:4444 --name geckodriver localhost/geckodriver-ubi /bin/bash

ChromeDriver
  * start with `chromedriver --whitelisted-ips=""` to allow remote connections
  * Port 9515

GeckoDriver
  * Port 4444

*/