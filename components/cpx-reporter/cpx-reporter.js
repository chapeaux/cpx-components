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
            value: {}
        });
        Object.defineProperty(this, "tasks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set(['beat', 'event', 'data'])
        });
        Object.defineProperty(this, "_ready", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    static get tag() { return 'cpx-reporter'; }
    get debug() {
        return this.getAttribute('debug');
    }
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
    }
    get ready() { return this._ready; }
    set ready(val) {
        if (this._ready === !!val)
            return;
        this._ready = !!val;
        if (this._ready) {
            this.report();
        }
    }
    connectedCallback() {
        const dataEle = this.querySelector('script[type="data"]');
        if (dataEle) {
            this.data = JSON.parse(dataEle.textContent);
        }
        const attrs = new Set();
        for (let i = 0; i < this.attributes.length; i++) {
            attrs.add(this.attributes[i]);
        }
        this.tasks.forEach(r => {
            if (!attrs.has(r)) {
                this.tasks.delete(r);
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
        if (this.tasks.has(name)) {
            this.tasks.delete(name);
        }
        if (this.getAttribute('auto') === '' && this.tasks.size === 0) {
            this.ready = true;
        }
    }
    report() {
        if (this.debug !== null) {
            if (this.debug !== 'verbose') {
                console.log('DEBUG ON');
            }
            else {
                console.log('VERBOSE DEBUG ON');
            }
        }
        this.dispatchEvent(new ReporterEvent(this.event, this.data));
    }
}
window.customElements.define(CPXReporter.tag, CPXReporter);
