export class CPXResultCount extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this._count = 0;
        this._term = '';
        this._loading = true;
        this.attachShadow({ mode: 'open' });
        this._setText = this._setText.bind(this);
    }
    get html() {
        return `
        ${this.term || this.count ? `
        <style>
        :host {
            grid-column: 5 / span 9;
            font-weight: 600;
            font-size: 1.2em;
            display: block;
            margin-bottom: 1em;
        }

        @media only screen and (max-width: 768px) {
            :host { border-bottom: 1px solid #d5d5d5; }
        }
        </style>
        <span>${this.count} results found ${this.term ? 'for' : ''} ${this.term.replace('<', '&lt;').replace('>', '&gt;')}</span>` : ''}`;
    }
    static get tag() { return 'cpx-result-count'; }
    get count() {
        return this._count;
    }
    set count(val) {
        if (this._count === val)
            return;
        this._count = val;
        this.setAttribute('count', val.toString());
    }
    get term() {
        return this._term;
    }
    set term(val) {
        val = decodeURI(val).replace('<', '&lt;').replace('>', '&gt;');
        if (this._term === val)
            return;
        this._term = val;
        this.setAttribute('term', val);
    }
    get loading() {
        return this._loading;
    }
    set loading(val) {
        if (this._loading === val)
            return;
        this._loading = val;
    }
    connectedCallback() {
        top.addEventListener('params-ready', this._setText);
        top.addEventListener('search-start', e => { this.loading = true; this._setText(e); });
        top.addEventListener('search-complete', e => { this.loading = false; this._setText(e); });
        this.render();
    }
    static get observedAttributes() {
        return ['count', 'term'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
        this.render();
    }
    _setText(e) {
        if (e.detail) {
            if (typeof e.detail.invalid === 'undefined') {
                if (e.detail.term && e.detail.term.length > 0) {
                    this.term = e.detail.term;
                }
                else {
                    this.term = '';
                }
                if (e.detail.results && e.detail.results.numFound && e.detail.results.numFound) {
                    this.count = e.detail.results.numFound;
                }
                else {
                    this.count = 0;
                }
                if (!this.loading) {
                    this.render();
                }
            }
            else {
                this.term = '';
                this.count = 0;
                this.shadowRoot.innerHTML = '';
            }
        }
        else {
            this.term = '';
            this.count = 0;
            this.shadowRoot.innerHTML = '';
        }
    }
    render() {
        this.shadowRoot.innerHTML = "";
        this.template.innerHTML = this.html;
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}
window.customElements.define(CPXResultCount.tag, CPXResultCount);
