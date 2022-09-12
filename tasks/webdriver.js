const cmd = ["chromedriver","--headless=true"];
const stdout = 'piped';
const stderr = 'piped';
let p;
onmessage = function(e) {
    let p;
    switch (e.data.msg) {
        case 'start':
            startDriver();
            postMessage('started');
            break;
        case 'stop':
            stopDriver();
            postMessage('stopped')
            break;
    }
}

function startDriver() {
    p = Deno.run({cmd, stdout, stderr});
}

function stopDriver() {
    p.kill("SIGTERM");
    p.close()
    self.close();
}