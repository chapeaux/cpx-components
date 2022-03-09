import { ReporterEvent } from "./reporter.js";
class CPXReporter extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "_beat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_event", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ready", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set(['beat', 'event', 'data'])
        });
    }
    static get tag() { return 'cpx-reporter'; }
    get beat() { return this._beat; }
    set beat(val) {
        if (this._beat === val)
            return;
        this._beat = val;
        this.addEventListener(this._beat, e => {
            this.dispatchEvent(new ReporterEvent(this.event));
        });
        this.setAttribute('beat', this._beat);
    }
    get event() { return this._event; }
    set event(val) {
        if (this._event === val)
            return;
        this._event = val;
        this.setAttribute('event', this._event);
    }
    get data() { return this._data; }
    set data(val) {
        if (this._data === val)
            return;
        this._data = val;
        this.setAttribute('data', this._data);
    }
    connectedCallback() {
        this.ready.forEach(r => {
            if ([...this.attributes].map(a => a.name).indexOf(r) < 0) {
                this.ready.delete(r);
            }
        });
    }
    static get observedAttributes() {
        return [
            "beat",
            "event",
            "data"
        ];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
        if (this.ready.has(name)) {
            this.ready.delete(name);
        }
        if (this.ready.size === 0 && this.getAttribute('auto') === '') {
            this.dispatchEvent(new ReporterEvent(this.event));
        }
    }
}
window.customElements.define(CPXReporter.tag, CPXReporter);
