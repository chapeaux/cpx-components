export class CPXCookie extends HTMLElement {
    constructor() {
        super();
        this.worker = new Worker(new URL(import.meta.url).pathname.replace('cpx-cookie.js', 'baker.js'));
        this.ready = false;
        this._debug = false;
        this._emit = 'cookie-ready';
        this.onMessage = this.onMessage.bind(this);
    }
    static get tag() { return 'cpx-cookie'; }
    get debug() { return this._debug; }
    set debug(val) {
        if (this._debug === val)
            return;
        this._debug = val;
    }
    get cookie() { return this._cookie; }
    set cookie(val) {
        this._cookie = val;
    }
    get action() { return this._action; }
    set action(val) {
        if (this._action === val)
            return;
        this._action = val;
        this.setAttribute('action', this._action);
    }
    get parse() { return this._parse; }
    set parse(val) {
        if (this._parse === val)
            return;
        this._parse = val;
        this.setAttribute('parse', this._parse);
    }
    get emit() { return this._emit; }
    set emit(val) {
        if (this._emit === val)
            return;
        this._emit = val;
        this.setAttribute('emit', this._emit);
    }
    get key() { return this._key; }
    set key(val) {
        if (this._key === val)
            return;
        this._key = val;
        this.setAttribute('key', this._key);
    }
    get value() { return this._value; }
    set value(val) {
        if (this._value === val)
            return;
        this._value = val;
        this.setAttribute('value', this._value);
    }
    connectedCallback() {
        this.worker.postMessage({
            action: this.action,
            payload: { key: this.key, data: this.action === 'set' ? this.value : document.cookie, parse: this.parse }
        });
        this.worker.onmessage = this.onMessage;
    }
    static get observedAttributes() {
        return [
            "action",
            "parse",
            "emit",
            "key",
            "value",
            "debug"
        ];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    onMessage(e) {
        if (this.action === 'set') {
            document.cookie = e.data;
        }
        this.dispatchEvent(new CustomEvent(this.emit, {
            bubbles: true,
            composed: true,
            detail: e.data
        }));
    }
}
window.customElements.define(CPXCookie.tag, CPXCookie);
