const baker = new Worker('baker.js');
export class CPXCookie extends HTMLElement {
    constructor() {
        super();
        this.worker = baker;
        this.ready = false;
        this._debug = false;
        this._cookie = document.cookie;
        this._emit = 'cookie-ready';
        this.worker.onmessage = (e) => console.log(e.data);
        this.action = this.getAttribute('action');
        this.parse = this.getAttribute('parse');
        this.key = this.getAttribute('key');
        this.value = this.getAttribute('value');
        this.emit = this.getAttribute('emit');
        if (this.action === 'set') {
            this.worker.postMessage({
                action: this.action,
                payload: { key: this.key, data: this.value }
            });
        }
        else {
            this.worker.postMessage({
                action: this.action,
                payload: { key: this.key, parse: this.parse, data: this.cookie }
            });
        }
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
    }
    get parse() { return this._parse; }
    set parse(val) {
        if (this._parse === val)
            return;
        this._parse = val;
    }
    get emit() { return this._emit; }
    set emit(val) {
        if (this._emit === val)
            return;
        this._emit = val;
    }
    get key() { return this._key; }
    set key(val) {
        if (this._key === val)
            return;
        this._key = val;
    }
    get value() { return this._value; }
    set value(val) {
        if (this._value === val)
            return;
        this._value = val;
    }
    connectedCallback() {
    }
}
window.customElements.define(CPXCookie.tag, CPXCookie);
