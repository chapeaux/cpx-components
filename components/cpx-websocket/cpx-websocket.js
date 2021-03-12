export class CPXWebSocket extends HTMLElement {
    constructor(url) {
        super();
        this._url = '';
        this.attachShadow({ mode: "open" });
        this.template = this.querySelector('template').cloneNode(true);
        this.logState = this.logState.bind(this);
        this.logMessage = this.logMessage.bind(this);
        this.logError = this.logError.bind(this);
    }
    get url() { return this._url; }
    set url(val) {
        if (this._url === val)
            return;
        this._url = val;
        this.setAttribute('url', this._url);
    }
    get state() { return ['connecting', 'open', 'closing', 'closed'][this.socket.readyState]; }
    get socket() { return this._socket; }
    set socket(val) {
        if (this._socket === val)
            return;
        this._socket = val;
    }
    get data() { return this._data; }
    set data(val) {
        if (this._data === val)
            return;
        this._data = val;
        this.render();
    }
    connectedCallback() {
        this.socket = new WebSocket(this.url);
        this.socket.addEventListener('open', this.logState);
        this.socket.addEventListener('message', this.logMessage);
        this.socket.addEventListener('close', this.logState);
        this.socket.addEventListener('error', this.logError);
        this.render();
    }
    static get observedAttributes() {
        return ['url'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    render() {
        if (this.data) {
            this.template = this.querySelector('template').cloneNode(true);
            let tmplKeys = this.template.content.querySelectorAll('[data-key]');
            tmplKeys.forEach(el => {
                el.innerHTML = el.innerHTML.replace(/\${([^{]+[^}])}/g, this.data[el.getAttribute('data-key')] || '');
            });
            let tmplRepeats = this.template.content.querySelectorAll('[data-repeat]');
            tmplRepeats.forEach(el => {
                let attr = el.getAttribute('data-repeat');
                let scope = attr === 'data' ? this.data : this.data[attr];
                let items = el.innerHTML.match(/\${[^{]+[^}]}/g);
                if (items && items.length > 0) {
                    let html = el.outerHTML;
                    let result = '';
                    for (let i = 0; i < scope.length; i++) {
                        result = `${result}
                    ${items.reduce((a, c) => {
                            return a.replace(c, scope[i][c.replace(/[\$\{\}]/g, '')]);
                        }, html)}`;
                    }
                    el.parentNode.innerHTML = result;
                }
            });
            while (this.shadowRoot.firstChild) {
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }
            this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        }
    }
    start() {
        if (this.state !== 'open' && this.state !== 'connecting') {
            this.socket = new WebSocket(this.url);
        }
    }
    stop() { return this.close; }
    close() {
        this.socket.close();
    }
    logState(e) {
        console.log('ReadyState:', ['connecting', 'open', 'closing', 'closed'][this.socket.readyState]);
    }
    logMessage(e) {
        this.data = JSON.parse(e.data);
    }
    logError(e) {
        console.log('Error:', e);
    }
}
window.customElements.define('cpx-websocket', CPXWebSocket);
