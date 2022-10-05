/**
 *  A simple web component for getting and setting cookie
 *  values and leveraging some specialized string parsing.
 *  @author Luke Dary <ldary@redhat.com>
 *  @todo Parse data points up the DOM ala Click To EDDL
 *  @summary CPXCookie class for the cpx-cookie web component
 *  @prop {string} action options of 'get' or 'set'
 *  @prop {string} emit optional event name to fire; defaults to 'cookie-ready'
 *  @prop {string} parse  parsing strategy to use on the cookie value; defaults to 'text'
 *  @prop {string} auto supplementary data to use in the report
 *  @prop {string} debug attribute-only or "verbose" for different variations
 *  @emits {ReporterEvent} cpx-report - customizable through the emit attribute
 */
export class CPXCookie extends HTMLElement {
    static get tag() { return 'cpx-cookie'; }

    _worker;
    get worker() { return this._worker; }

    ready = false;

    _debug = false;
    get debug() { return this._debug; }
    set debug(val) {
        if (this._debug === val) return;
        this._debug = val;
    }

    _cookie;
    get cookie() { return this._cookie; }
    set cookie(val) {
        this._cookie = val;
    }

    _action;
    get action() { return this._action; }
    set action(val) {
        if (this._action === val) return;
        this._action = val;
        this.setAttribute('action',this._action);
    }

    _parse;
    get parse() { return this._parse; }
    set parse(val) {
        if (this._parse === val) return;
        this._parse = val;
        this.setAttribute('parse',this._parse);
    }

    _emit = 'cookie-ready';
    get emit() { return this._emit; }
    set emit(val) {
        if (this._emit === val) return;
        this._emit = val;
        this.setAttribute('emit',this._emit);
    }

    _key:string;
    get key() { return this._key; }
    set key(val) {
        if (this._key === val) return;
        this._key = val;
        this.setAttribute('key',this._key);
    }

    _value:string;
    get value() { return this._value; }
    set value(val) {
        if (this._value === val) return;
        this._value = val;
        this.setAttribute('value',this._value);
    }

    _data:any;
    get data() { return this._data; }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
    }

    // reqs = new Map([
    //     ['get', new Set(['action','key'])]
    // ])
    // tasks = new Set(['action','key','emit','parse']);

    constructor() {
        super();
        this.onmessage = this.onmessage.bind(this);
    }

    connectedCallback() {
        this.initWorker();
    }

    static get observedAttributes() {
        return [
            "action", // find/set
            "parse", // jwt/base64/
            "emit", // default: cookie-ready
            "key",
            "value",
            "debug"
        ];
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        this[name] = newVal;
    }

    onmessage(e) {
        if (this.action === 'set') {
            document.cookie = e.data;
        }

        this.data = e.data;

        this.dispatchEvent(new CustomEvent(this.emit, {
            bubbles: true,
            composed: true,
            detail: e.data
        }));
    }

    async initWorker() {
        try {
            this._worker = new Worker(import.meta.url.replace('cpx-cookie.js','cutter.js'));
            this.worker['onmessage'] = this.onmessage;
        } catch {
            const {Baker} = await import(import.meta.url.replace('cpx-cookie.js','baker.js'));
            this._worker = new Baker(this);
        }

        this.worker['postMessage']({
            action:this.action,
            payload:{key:this.key,data:this.action ==='set'?this.value:document.cookie,parse:this.parse}
        });
    }
}

window.customElements.define(CPXCookie.tag,CPXCookie);
