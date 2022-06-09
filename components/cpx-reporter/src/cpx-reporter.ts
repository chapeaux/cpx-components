import { ReporterEvent } from "./reporter";

/**
 *  Based off documentation for EDDL found here:
 *  https://github.com/searchdiscovery/redhat-datalayer/blob/main/EDDL/global-datalayer.md
 *  @todo Parse data points up the DOM ala Click To EDDL
 *  @summary CPXReporter class for the cpx-reporter web component
 *  @attr {string} beat - optional event listener (e.g. - user-ready, token-ready, click)
 *  @attr {string} emit - optional event name to fire 
 *  @attr {string} event - which EDDL event to reference
 *  @attr {string} data - supplementary data to use in the report
 *  @attr {string} debug - attribute-only or "verbose" for different variations
 *  @fires {ReporterEvent} cpx-report - customizable through the emit attribute
 */
export class CPXReporter extends HTMLElement {
    static get tag() { return 'cpx-reporter'; }
    _debug:string;
    get debug() {
        return this._debug;
    }
    set debug(val) {
        if (this._debug === val) return;
        this._debug = val;
    }
    
    _beat:string;
    get beat() { return this._beat; }
    set beat(val) {
        if (this._beat === val) return;
        this._beat = val;
        this.addEventListener(this._beat, e => {
            const detail = e['detail'];
            if (this.option) {
                this.data = Object.assign(this.data,detail[this.option]??{})
            } else {
                this.data = Object.assign(this.data,detail??{});
            }
            this.dispatchEvent(new ReporterEvent(this.event, this.data, this.emit));
        });
        this.setAttribute('beat',this._beat);
    }

    _event:string;
    get event() { return this._event; }
    set event(val) {
        if (this._event === val) return;
        this._event = val;
        this.setAttribute('event', this._event);
    }

    _option:string;
    get option() { return this._option; }
    set option(val) {
        if (this._option === val) return;
        this._option = val;
        this.setAttribute('option', this._option);
    }

    _data = {};
    get data() { return this._data; }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        //this.setAttribute('data', this._data);
    }
    tasks = new Set(['beat','event','data']);
    constructor() {
        super();
    }
    _ready = false;
    get ready() { return this._ready; }
    set ready(val) {
        if (this._ready === !!val) return;
        this._ready = !!val;
        if(this._ready) {
            this.report();
        }
    }

    _emit = 'cpx-report';
    get emit() { return this._emit; }
    set emit(val) {
        if (this._emit === val) return;
        this._emit = val;
    }
    connectedCallback() {
        const dataEle = this.querySelector(':scope > script[type="data"]');
        if (dataEle) {
            this.data = JSON.parse(dataEle.textContent);
        }

        const attrs = new Set();
        for (let i=0; i < this.attributes.length; i++) {
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
            "emit",
            "event",
            "data",
            "debug",
            "option"
        ];
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        this[name] = newVal;
        if (this.tasks.has(name)) { this.tasks.delete(name); }
        if (this.getAttribute('auto') === '' && this.tasks.size === 0) {
            this.ready = true;
        }

    }

    report() {
        if (this.debug !== null) { 
            if (this.debug !== 'verbose') {
                console.log('DEBUG ON'); 
            } else { console.log('VERBOSE DEBUG ON'); }
        }
        this.dispatchEvent(new ReporterEvent(this.event, this.data, this.emit));
    }
}

window.customElements.define(CPXReporter.tag,CPXReporter);