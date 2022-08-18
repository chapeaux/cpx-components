const baker = new Worker('baker.js');
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
    
    worker = baker;
    ready = false;

    _debug = false;
    get debug() { return this._debug; }
    set debug(val) { 
        if (this._debug === val) return;
        this._debug = val;
    }

    _cookie = document.cookie;
    get cookie() { return this._cookie; }
    set cookie(val) {
        this._cookie = val;
    }

    _action;
    get action() { return this._action; }
    set action(val) {
        if (this._action === val) return;
        this._action = val;
    }

    _parse;
    get parse() { return this._parse; }
    set parse(val) {
        if (this._parse === val) return;
        this._parse = val;
    }

    _emit = 'cookie-ready';
    get emit() { return this._emit; }
    set emit(val) {
        if (this._emit === val) return;
        this._emit = val;
    }

    _key:string;
    get key() { return this._key; }
    set key(val) {
        if (this._key === val) return;
        this._key = val;
    }

    _value:string;
    get value() { return this._value; }
    set value(val) {
        if (this._value === val) return;
        this._value = val;
    }

    // reqs = new Map([
    //     ['get', new Set(['action','key'])]
    // ])
    // tasks = new Set(['action','key','emit','parse']);
    
    constructor() {
        super();
        this.worker.onmessage = (e) => console.log(e.data);
        this.action = this.getAttribute('action');
        this.parse = this.getAttribute('parse');
        this.key = this.getAttribute('key');
        this.value = this.getAttribute('value');
        this.emit = this.getAttribute('emit');
        if (this.action === 'set') {
            // SET SIGNATURE
            this.worker.postMessage({
                action:this.action,
                payload:{key:this.key,data:this.value}
            });
        } else {
            // GET SIGNATURE
            this.worker.postMessage({
                action:this.action,
                payload:{key:this.key,parse:this.parse,data:this.cookie}
            });
        }
    }

    connectedCallback() {
        
    }
/*
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
        console.log('Change:',name,'old:',oldVal,'new:',newVal);
        this[name] = newVal;
        if (this.tasks.has(name)) { this.tasks.delete(name); }
        if (this.getAttribute('auto') === '' && this.tasks.size === 0) {
            this.ready = true;
        }
    }
*/
}

window.customElements.define(CPXCookie.tag,CPXCookie);