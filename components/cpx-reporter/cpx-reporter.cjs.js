"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter_1 = require("deno:///missing_dependency.d.ts");
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
    }
    static get tag() { return 'cpx-reporter'; }
    get beat() { return this._beat; }
    set beat(val) {
        if (this._beat === val)
            return;
        this._beat = val;
        this.addEventListener(this._beat, e => {
            this.dispatchEvent(new reporter_1.ReporterEvent(this.event));
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
    }
}
window.customElements.define(CPXReporter.tag, CPXReporter);
